import type { Experience } from '@/lib/experiences'
import { SITE_URL } from '@/lib/site'

// TouristTrip produces no visual Google rich result — schema.org type Google reads
// for entity comprehension only. Value is AI answer engines (AI Overviews, ChatGPT,
// Perplexity) citing specific trip details, not a search-result card.
export function touristTripSchema(experience: Experience) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: experience.name,
    description: experience.intro,
    url: `${SITE_URL}/experiences/${experience.slug}`,
    image: experience.heroImage.src,
    touristType: experience.facts.whoItsFor,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nature Fix',
      url: SITE_URL,
    },
    itinerary: {
      '@type': 'ItemList',
      itemListElement: experience.arc.map((day, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Place',
          name: `${day.day} — ${day.location}`,
          description: day.summary,
        },
      })),
    },
  }
}
