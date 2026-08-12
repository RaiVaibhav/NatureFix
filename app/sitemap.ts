import type { MetadataRoute } from 'next'
import { listedExperiences } from '@/lib/experiences'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/experiences`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...listedExperiences.map((e) => ({
      url: `${SITE_URL}/experiences/${e.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
