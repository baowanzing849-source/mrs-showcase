import Link from 'next/link'
import type { ScriptItem } from '@/data/scripts'
import { MediaFrame } from '@/components/MediaFrame'

export function ShowcaseStrip({
  title,
  items,
}: {
  title: string
  items: ScriptItem[]
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <p className="eyebrow">Highlight</p>
            <h2>{title}</h2>
          </div>

          <Link href="/scripts" className="btn btn-secondary">
            View All
          </Link>
        </div>

        <div className="showcase-strip">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/scripts/${item.slug}`}
              className="glass showcase-card"
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100%',
                transform: 'translateZ(0)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <MediaFrame src={item.thumbnail} alt={item.title} ratio="landscape" />

                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 68%, rgba(0,0,0,0.32) 100%)',
                  }}
                />

                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-30%',
                    pointerEvents: 'none',
                    background:
                      'linear-gradient(120deg, transparent 0%, rgba(255,140,40,0.18) 36%, transparent 62%)',
                    transform: 'translateX(-55%) rotate(10deg)',
                    opacity: 0.42,
                    mixBlendMode: 'screen',
                  }}
                />
              </div>

              <div
                className="showcase-card__body"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'grid',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="pill">{item.categoryLabel}</span>

                  <span
                    style={{
                      color: 'rgba(255,255,255,0.56)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Showcase
                  </span>
                </div>

                <div style={{ display: 'grid', gap: '10px' }}>
                  <h3
                    style={{
                      margin: 0,
                      lineHeight: 1.05,
                      fontSize: '30px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,0.74)',
                      lineHeight: 1.8,
                    }}
                  >
                    {item.summary}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.62)',
                      fontSize: '14px',
                      fontWeight: 600,
                    }}
                  >
                    {item.framework}
                  </span>

                  <span
                    style={{
                      color: 'var(--gold-bright)',
                      fontWeight: 800,
                      fontSize: '14px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    View Project →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}