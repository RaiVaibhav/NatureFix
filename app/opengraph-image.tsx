import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
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
            gap: 10,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#EA9F4E',
            marginBottom: 28,
          }}
        >
          Mountain weekends in Bir, Himachal Pradesh
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#FAF7F1',
            maxWidth: 980,
          }}
        >
          Leave lighter than you arrived.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginTop: 56,
            fontSize: 34,
            fontWeight: 700,
            color: '#FAF7F1',
          }}
        >
          Nature<span style={{ color: '#EA9F4E' }}>Fix</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
