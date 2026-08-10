/**
 * Pulls every photograph referenced by lib/images.ts into public/img/ and records
 * its dimensions plus a blur placeholder in lib/image-manifest.json.
 *
 * Why this exists: hotlinking Wikimedia meant shipping ~8.6 MB of full-size JPEGs
 * from a third party that rate-limits us (their 429s are easy to trigger) and that
 * next/image cannot optimize. Fetching once, at build-authoring time, turns every
 * photo into a local asset the optimizer can resize, convert to AVIF/WebP, and cache.
 *
 *   node scripts/fetch-images.mjs          # only fetches what's missing
 *   node scripts/fetch-images.mjs --force  # re-fetches everything
 *
 * Re-run after editing the img() calls in lib/images.ts.
 */
import { readFile, writeFile, mkdir, access, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'public/img')
const MANIFEST = path.join(ROOT, 'lib/image-manifest.json')
const SOURCE = path.join(ROOT, 'lib/images.ts')

/** Widest we ever need: the hero spans the viewport, and next/image derives the
 *  smaller srcset entries from this. Anything larger is bytes no device asks for. */
const MAX_WIDTH = 2000
const QUALITY = 82
const FORCE = process.argv.includes('--force')

const slugify = (file) =>
  file
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 70)

const commonsUrl = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${MAX_WIDTH}`

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  )

/** Commons rate-limits aggressively; back off and identify ourselves properly. */
async function download(url, attempt = 1) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'NatureFix-site-build/1.0 (build-time asset fetch)' },
  })
  if (res.status === 429 && attempt <= 5) {
    const wait = attempt * 4000
    console.log(`   rate-limited, waiting ${wait / 1000}s…`)
    await new Promise((r) => setTimeout(r, wait))
    return download(url, attempt + 1)
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return Buffer.from(await res.arrayBuffer())
}

async function main() {
  const src = await readFile(SOURCE, 'utf8')

  // Two kinds of source. img('File.jpg', …) resolves through Commons' Special:FilePath;
  // ext('slug', 'https://…', …) carries its own URL, for places Commons simply doesn't
  // cover — Rajgundha has no Commons presence at all.
  const commons = [...src.matchAll(/img\(\s*'([^']+)'/g)].map((m) => ({
    key: m[1],
    url: commonsUrl(m[1]),
  }))
  const external = [...src.matchAll(/ext\(\s*'([^']+)',\s*'([^']+)'/g)].map((m) => ({
    key: m[1],
    url: m[2],
  }))

  const seen = new Set()
  const files = [...commons, ...external].filter((f) => !seen.has(f.key) && seen.add(f.key))

  if (!files.length) {
    console.error("No img(…) or ext(…) calls found in lib/images.ts — nothing to fetch.")
    process.exit(1)
  }

  await mkdir(OUT_DIR, { recursive: true })
  const manifest = JSON.parse(
    await readFile(MANIFEST, 'utf8').catch(() => '{}'),
  )

  console.log(`${files.length} unique images → public/img/\n`)
  let fetched = 0
  let skipped = 0

  for (const { key, url } of files) {
    const name = `${slugify(key)}.webp`
    const dest = path.join(OUT_DIR, name)

    if (!FORCE && manifest[key] && (await exists(dest))) {
      skipped++
      continue
    }

    process.stdout.write(`   ${key.slice(0, 58)}… `)
    try {
      const raw = await download(url)

      // Re-encode rather than storing the original: strips EXIF, normalises to a
      // progressive JPEG, and caps the longest edge so the optimizer starts from a
      // sane master instead of a 4000px scan.
      const pipeline = sharp(raw).rotate().resize({
        width: MAX_WIDTH,
        withoutEnlargement: true,
      })
      const { width, height } = await pipeline
        .clone()
        .webp({ quality: QUALITY })
        .toFile(dest)

      // 12px wide blur, inlined as a data URI — enough to suggest the photograph's
      // colour and composition while the real file streams in.
      const blur = await sharp(raw)
        .resize({ width: 12 })
        .webp({ quality: 40 })
        .toBuffer()

      manifest[key] = {
        src: `/img/${name}`,
        width,
        height,
        blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
      }
      fetched++
      console.log(`${width}×${height}`)

      // be a good citizen between requests
      await new Promise((r) => setTimeout(r, 400))
    } catch (err) {
      console.log(`FAILED (${err.message}) — will fall back to the remote URL`)
    }
  }

  // Drop anything lib/images.ts no longer references. Only files this script wrote are
  // removed — we go through the old manifest rather than globbing public/img — so a photo
  // added by hand is never touched, and everything deleted is one re-run away from coming
  // back. Without this, retired imagery lingers in git and in the deploy forever.
  const wanted = new Set(files.map((f) => f.key))
  let pruned = 0
  for (const [file, entry] of Object.entries(manifest)) {
    if (wanted.has(file)) continue
    await rm(path.join(ROOT, 'public', entry.src.replace(/^\//, '')), { force: true })
    delete manifest[file]
    pruned++
    console.log(`   pruned ${file.slice(0, 58)}`)
  }

  // stable key order keeps the manifest diff-friendly
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))
  await writeFile(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`)

  console.log(
    `\nfetched ${fetched}, already present ${skipped}, pruned ${pruned}, manifest ${Object.keys(sorted).length} entries`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
