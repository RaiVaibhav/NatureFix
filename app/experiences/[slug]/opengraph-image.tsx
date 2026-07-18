import { ImageResponse } from 'next/og'
import { experiences, getExperience } from '@/lib/experiences'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const experience = getExperience(slug)
  const name = experience?.name ?? 'Nature Fix'
  const promise = experience?.promise ?? 'Leave lighter than you arrived.'
  const duration = experience?.duration
  const season = experience?.season

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #16241D 0%, #0E1712 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#EA9F4E',
            marginBottom: 28,
          }}
        >
          Nature<span style={{ color: '#FAF7F1' }}>Fix</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#FAF7F1',
            maxWidth: 1000,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#EAE1CE',
            maxWidth: 900,
            marginTop: 24,
          }}
        >
          {promise}
        </div>
        {(duration || season) && (
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 48,
            }}
          >
            {duration && (
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  color: '#EA9F4E',
                  border: '2px solid #EA9F4E',
                  borderRadius: 999,
                  padding: '10px 24px',
                }}
              >
                {duration}
              </div>
            )}
            {season && (
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  color: '#EA9F4E',
                  border: '2px solid #EA9F4E',
                  borderRadius: 999,
                  padding: '10px 24px',
                }}
              >
                {season}
              </div>
            )}
          </div>
        )}
      </div>
    ),
    { ...size },
  )
}
