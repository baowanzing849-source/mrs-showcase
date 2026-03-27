import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllScripts, getScriptBySlug } from '@/data/scripts'
import { MediaFrame } from '@/components/MediaFrame'
import { ShowcaseStrip } from '@/components/ShowcaseStrip'

export function generateStaticParams() {
  return getAllScripts().map((item) => ({ slug: item.slug }))
}

export default function ScriptDetailPage({ params }: { params: { slug: string } }) {
  const item = getScriptBySlug(params.slug)

  if (!item) notFound()

  const related = getAllScripts().filter((script) => script.category === item.category && script.slug !== item.slug)

  return (
    <section className="detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url('${item.cover}')` }}>
        <div className="detail-hero__overlay" />
        <div className="container detail-hero__inner">
          <span className="pill">{item.categoryLabel}</span>
          <h1>{item.title}</h1>
          <p className="muted max-w-text">{item.summary}</p>
        </div>
      </div>

      <div className="container detail-grid-wrap">
        <aside className="glass detail-sidebar">
          <MediaFrame src={item.thumbnail} alt={item.title} ratio="portrait" />
          <div className="detail-sidebar__body">
            <h3>{item.title}</h3>
            <p className="muted">{item.shortInfo}</p>
            <div className="meta-list">
              <div><strong>Framework:</strong> {item.framework}</div>
              <div><strong>Status:</strong> {item.status}</div>
              <div><strong>Type:</strong> {item.categoryLabel}</div>
            </div>
            <a className="btn btn-primary btn-block" href={`https://www.youtube.com/watch?v=${item.youtubeId}`} target="_blank" rel="noreferrer">
              เปิด YouTube
            </a>
          </div>
        </aside>

        <div className="glass detail-main">
          <div className="video-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="detail-copy">
            <h2>Description</h2>
            <p>{item.description}</p>

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
                    <MediaFrame key={`${item.slug}-${index}`} src={image} alt={`${item.title} ${index + 1}`} ratio="landscape" />
                  ))}
                </div>
              </>
            )}

            <div className="detail-actions">
              <Link href="/scripts" className="btn btn-secondary">Back to Scripts</Link>
              <Link href={`/categories/${item.category}`} className="btn btn-secondary">More in Category</Link>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && <ShowcaseStrip title="More Like This" items={related} />}
    </section>
  )
}
