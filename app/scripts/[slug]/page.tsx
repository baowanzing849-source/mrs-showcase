import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllScripts, getScriptBySlug } from '@/data/scripts'
import { MediaFrame } from '@/components/MediaFrame'
import { ShowcaseStrip } from '@/components/ShowcaseStrip'

export function generateStaticParams() {
  return getAllScripts().map((item) => ({ slug: item.slug }))
}

export default function ScriptDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const item = getScriptBySlug(params.slug)

  if (!item) notFound()

  const related = getAllScripts().filter(
    (script) => script.category === item.category && script.slug !== item.slug
  )

  return (
    <section className="detail-page">
      <div
        className="detail-hero"
        style={{ backgroundImage: `url('${item.cover}')` }}
      >
        <div className="detail-hero__overlay" />
        <div className="detail-hero__noise" />

        <div className="container detail-hero__inner">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <span className="pill">{item.categoryLabel}</span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '34px',
                padding: '0 12px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(8,8,10,0.28)',
                color: 'rgba(255,255,255,0.78)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              {item.status}
            </span>
          </div>

          <h1>{item.title}</h1>
          <p className="muted max-w-text">{item.summary}</p>
        </div>
      </div>

      <div className="container detail-grid-wrap">
        <aside
          className="glass detail-sidebar"
          style={{
            alignSelf: 'start',
          }}
        >
          <MediaFrame src={item.thumbnail} alt={item.title} ratio="portrait" />

          <div className="detail-sidebar__body">
            <h3
              style={{
                marginTop: 0,
                marginBottom: '10px',
                lineHeight: 1.08,
              }}
            >
              {item.title}
            </h3>

            <p className="muted">{item.shortInfo}</p>

            <div
              className="meta-list"
              style={{
                marginTop: '24px',
                gap: '14px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(84px, 96px) 1fr',
                  gap: '12px',
                }}
              >
                <strong style={{ color: '#fff' }}>Framework</strong>
                <span style={{ overflowWrap: 'anywhere' }}>{item.framework}</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(84px, 96px) 1fr',
                  gap: '12px',
                }}
              >
                <strong style={{ color: '#fff' }}>Status</strong>
                <span style={{ overflowWrap: 'anywhere' }}>{item.status}</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(84px, 96px) 1fr',
                  gap: '12px',
                }}
              >
                <strong style={{ color: '#fff' }}>Type</strong>
                <span style={{ overflowWrap: 'anywhere' }}>{item.categoryLabel}</span>
              </div>
            </div>

            <div
              style={{
                marginTop: '26px',
                display: 'grid',
                gap: '12px',
              }}
            >
              <a
                className="btn btn-primary btn-block"
                href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                target="_blank"
                rel="noreferrer"
              >
                เปิด YouTube
              </a>

              <Link href="/contact" className="btn btn-secondary btn-block">
                ติดต่อเกี่ยวกับงานนี้
              </Link>
            </div>
          </div>
        </aside>

        <div className="glass detail-main">
          <div
            style={{
              display: 'grid',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ minWidth: 0 }}>
                <p
                  className="eyebrow"
                  style={{
                    marginBottom: '10px',
                  }}
                >
                  Product Overview
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: 'clamp(28px, 4vw, 38px)',
                    lineHeight: 1.04,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {item.title}
                </h2>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                }}
              >
                <span className="pill">{item.framework}</span>
                <span className="pill">{item.categoryLabel}</span>
              </div>
            </div>

            <div className="video-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              <div
                style={{
                  padding: '18px 18px 20px',
                  borderRadius: '22px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))',
                  minWidth: 0,
                }}
              >
                <p
                  className="eyebrow"
                  style={{
                    marginBottom: '10px',
                  }}
                >
                  Description
                </p>

                <p
                  style={{
                    margin: 0,
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.9,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  padding: '18px 18px 20px',
                  borderRadius: '22px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))',
                  minWidth: 0,
                }}
              >
                <p
                  className="eyebrow"
                  style={{
                    marginBottom: '10px',
                  }}
                >
                  Quick Info
                </p>

                <div
                  style={{
                    display: 'grid',
                    gap: '12px',
                    color: 'rgba(255,255,255,0.78)',
                    overflowWrap: 'anywhere',
                  }}
                >
                  <div>
                    <strong style={{ color: '#fff' }}>Slug:</strong> {item.slug}
                  </div>

                  <div>
                    <strong style={{ color: '#fff' }}>Type:</strong>{' '}
                    {item.categoryLabel}
                  </div>

                  <div>
                    <strong style={{ color: '#fff' }}>Status:</strong>{' '}
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-copy">
            <h2>Core Features</h2>

            <ul className="feature-list">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            {item.gallery.length > 0 && (
              <>
                <h2>Gallery</h2>

                <div className="gallery-grid">
                  {item.gallery.map((image, index) => (
                    <MediaFrame
                      key={`${item.slug}-${index}`}
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      ratio="landscape"
                    />
                  ))}
                </div>
              </>
            )}

            <div
              className="detail-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <Link href="/scripts" className="btn btn-secondary">
                Back to Scripts
              </Link>

              <Link
                href={`/categories/${item.category}`}
                className="btn btn-secondary"
              >
                More in Category
              </Link>

              <a
                href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <ShowcaseStrip title="More Like This" items={related} />
      )}
    </section>
  )
}