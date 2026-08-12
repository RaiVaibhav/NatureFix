import type { MetadataRoute } from 'next'
import { experiences } from '@/lib/experiences'
import { SITE_URL } from '@/lib/site'

// working drafts stay crawlable-by-link for us and invisible to everyone else
const drafts = experiences.filter((e) => e.isUnlisted).map((e) => `/experiences/${e.slug}`)

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: drafts,
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Anthropic-ai', 'Claude-Web', 'PerplexityBot', 'CCBot', 'Google-Extended'],
        allow: '/',
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
