// Reference imagery pulled from Wikimedia Commons (CC-licensed) purely to test how the
// real layout feels with real photography instead of "Image slot A" text placeholders.
// Swap for @adventureishani archive / pilot-run shoots per LAYOUT-SPEC §7 before this ships.
//
// Photographs are fetched into public/img/ by scripts/fetch-images.mjs, which also records
// each file's dimensions and a blur placeholder in image-manifest.json. That lets next/image
// resize, convert to AVIF/WebP, and cache them — none of which is possible while hotlinking
// Commons. Run `npm run images` after adding or changing an img() call below.
import manifest from './image-manifest.json'

export type Photo = {
  src: string
  credit: string
  width?: number
  height?: number
  blurDataURL?: string
}

type ManifestEntry = { src: string; width: number; height: number; blurDataURL: string }
const entries = manifest as Record<string, ManifestEntry | undefined>

/**
 * Resolves a Commons filename to the local asset when it has been fetched, and falls
 * back to the remote URL when it hasn't — so a fresh clone still renders before anyone
 * runs the fetch script, just without optimization.
 */
function img(file: string, credit: string): Photo {
  const local = entries[file]
  if (local) {
    return { src: local.src, credit, width: local.width, height: local.height, blurDataURL: local.blurDataURL }
  }
  return { src: `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1600`, credit }
}

/**
 * Blur placeholder for an already-resolved local src, keyed by path rather than by
 * Commons filename. Lets PhotoFrame and HeroBackdrop keep taking a plain `src` string
 * — as every call site already passes — while still getting a blur-up.
 */
const blurBySrc = new Map(
  Object.values(entries)
    .filter((e): e is ManifestEntry => Boolean(e))
    .map((e) => [e.src, e.blurDataURL]),
)

export function blurFor(src: string): string | undefined {
  return blurBySrc.get(src)
}

/**
 * Geography is the hard constraint here. Everything an experience page shows has to be
 * somewhere you could actually walk to that weekend — Bir, the Billing ridge above it,
 * the Uhl valley behind it, Baijnath down the road. Photographs of the right *mood* from
 * the wrong valley (Spiti monasteries, Sarchu's high-desert tents, Jibhi's waterfall,
 * Triund on the far side of the Dhauladhar) read as stock and quietly break the promise
 * that we know this place. Commons categories `Bir (Kangra)`, `Bir-Billing` and
 * `Barot Valley` are the honest sources; keep new entries inside them.
 */
export const images = {
  // hero — greenery-and-ridge rather than snow or a wing, so the homepage reads as
  // mountain culture rather than a paragliding operator or a trekking company
  heroTrail: img(
    'Hiking_off_to_Laka_Got_from_Triund_(16285401872).jpg',
    'Trail to Laka Got, Triund — Dhauladhar, Wikimedia Commons',
  ),
  heroValley: img(
    'Palampur_tea_plantation,_Himachal_Pradesh,_India.jpg',
    'Palampur tea plantation — Kangra valley, Wikimedia Commons',
  ),
  heroRidge: img('Dhauldhar_through_the_Canopy.jpg', 'Dhauladhar through the canopy, Wikimedia Commons'),

  // ——— Bir village & the Tibetan Colony ———
  birVillageStreet: img('Bir_Village_01.jpg', 'The Colony road, Bir — Kangra, Wikimedia Commons'),
  birVillageLane: img('Bir_Village_05.jpg', 'Bir village — Kangra, Wikimedia Commons'),
  birValley: img('Bir_village.jpg', 'Bir and the valley below — Kangra, Wikimedia Commons'),
  birFields: img('Fields_near_bir_tibetan_colony.jpg', 'Fields by the Tibetan Colony, Bir — Wikimedia Commons'),
  birPasture: img('Pasture_Land_of_Bir,_himachal_Pradesh.jpg', 'Pasture land, Bir — Kangra, Wikimedia Commons'),
  birForest: img('Bir_forest.jpg', 'The forest above Bir — Kangra, Wikimedia Commons'),

  // ——— the Billing ridge: launch, trail, air ———
  billingLaunch: img('Billing,_Kangra.jpg', 'The launch at Billing — Kangra, Wikimedia Commons'),
  billingDhauladhar: img('Dhauladhar_range.jpg', 'The Dhauladhar from Billing — Wikimedia Commons'),
  birLandingZone: img(
    'Bir_Billing-_Paragliding_Capital_of_India.jpg',
    'The landing field, Bir — Wikimedia Commons',
  ),
  birGaggle: img(
    'Gaggle_-_Paragliding_in_Bir,_Himachal_Pradesh.jpg',
    'A gaggle climbing over Bir — Wikimedia Commons',
  ),
  birSunsetFlight: img('Sunset_in_Bir,_Himachal_Pradesh.jpg', 'Sunset flight, Bir — Wikimedia Commons'),
  birSunsetGliders: img('Sunset_gliding_in_Bir,_Himachal_Pradesh.jpg', 'Last flights of the day, Bir — Wikimedia Commons'),
  heroFly: img('Bir-Billing.jpg', 'Bir-Billing, Wikimedia Commons'),

  // ——— monasteries, the Colony, the practice ———
  choklingMonastery: img(
    'Chokling_Monastery,_Bir,_Himachal_Pradesh.jpg',
    'Chokling Monastery, Bir — Wikimedia Commons',
  ),
  choklingApproach: img('Chokling_Monastery,_Bir.jpg', 'The approach to Chokling Monastery, Bir — Wikimedia Commons'),
  birInstitute: img('Chokling_Monastery,_External_View.jpg', 'Chokling Monastery grounds, Bir — Wikimedia Commons'),
  birMonasteryFlags: img('Bir-06-Kloster-gje.jpg', 'Prayer flags over a Bir monastery — Wikimedia Commons'),
  birMonasteryCourtyard: img('Bir-08-Kloster-Innenhof-gje.jpg', 'Monastery courtyard, Bir — Wikimedia Commons'),
  birPrayerHall: img('BirC087-.jpg', 'Prayers in the hall, Bir — Wikimedia Commons'),
  birMonasteryGate: img('BirC004-.jpg', 'Monastery gate, Bir — Wikimedia Commons'),
  birInstituteCourt: img('BirC115-.jpg', 'Institute courtyard, Bir — Wikimedia Commons'),
  birManiStones: img('BirF091-.jpg', 'Mani stones, Bir — Wikimedia Commons'),
  birStupa: img('A_Stupa_at_Bir_Tibetan.jpg', 'A stupa in the Tibetan Colony, Bir — Wikimedia Commons'),
  birMonks: img('Monks_in_bir_tibetan_colony.jpg', 'Monks in the Tibetan Colony, Bir — Wikimedia Commons'),

  // ——— the Uhl valley behind Billing: Rajgundha, Barot, the high passes ———
  uhlTowardsBilling: img(
    'Uhl_above_Barot_towards_Billing_Oct_2017_D72_2280_01.jpg',
    'The Uhl valley, looking towards Billing — Wikimedia Commons',
  ),
  uhlRiver: img('Uhl_River_at_Barot_Oct_2017_D72_2280.jpg', 'The Uhl river above Barot — Wikimedia Commons'),
  lambaDugStream: img(
    'Lamba_Dug_Barot_Himachal_Oct20_R16_04289.jpg',
    'Lamba Dug stream, above Barot — Wikimedia Commons',
  ),
  barotValley: img('View_of_Barot_valley_01.jpg', 'The Barot valley — Mandi, Wikimedia Commons'),
  roadlessValley: img('Camping_at_foothills_of_himalayas.jpg', 'A roadless Himalayan valley — Wikimedia Commons'),
  meadowTents: img('Camping_Site_at_Triund_Hill_Top.jpg', 'A Dhauladhar meadow camp — Wikimedia Commons'),
  highPass: img('Thamsar_Pass.jpg', 'Thamsar Pass, above the Uhl valley — Wikimedia Commons'),

  // ——— trail, shepherds, forest ———
  shepherds: img(
    'Gaddi_shepherds_having_a_good_time_(16260304116).jpg',
    'Gaddi shepherds on the ridge — Dhauladhar, Wikimedia Commons',
  ),
  forestClimb: img('Climbing_up_from_Triund_(8680905196).jpg', 'Climbing through the forest — Dhauladhar, Wikimedia Commons'),
  lushRidge: img(
    'September_in_the_hills_is_lush_green_(16285394362).jpg',
    'The hills in September — Dhauladhar, Wikimedia Commons',
  ),

  // ——— everything else ———
  reframeTexture: img(
    'Campfire_flames_at_night.jpg',
    'Campfire flames at night, Wikimedia Commons (CC BY-SA 4.0)',
  ),
  fireCircle: img('People_sitting_around_a_camp_fire.jpg', 'People sitting around a camp fire, Wikimedia Commons'),
  trustPortrait: img(
    'Hikers_IIT_Mandi_Griffon_Peak,_Himachal_Jan20_D72_13723.jpg',
    'Hikers, Griffon Peak — Himachal Pradesh, Wikimedia Commons',
  ),
  trustSecondary: img('Dhauladhar_layers.JPG', 'Dhauladhar layers, Wikimedia Commons'),
  community: img('Sunset_India_village.jpg', 'Sunset, India village, Wikimedia Commons'),
  waterfall: img('Banghodu_Waterfall.jpg', 'Banghodu waterfall, Bir-Billing — Wikimedia Commons'),
  baijnathTemple: img(
    '0051423_Baijnath_temple,_Vaidyanatha_mandir,_Baijnath_Himachal_Pradesh_135_(cropped).jpg',
    'Baijnath Temple, Kangra — Himachal Pradesh, Wikimedia Commons',
  ),
  teaGarden: img(
    'Tea_garden_at_Nagri_in_the_Kangra_Valley_of_Himachal_Pradesh,_India.jpg',
    'Tea garden, Nagri — Kangra valley, Wikimedia Commons',
  ),
}
