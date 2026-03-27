import Link from 'next/link'
import type { ScriptItem } from '@/data/scripts'
import { MediaFrame } from '@/components/MediaFrame'

export function ShowcaseStrip({ title, items }: { title: string; items: ScriptItem[] }) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <p className="eyebrow">Highlight</p>
            <h2>{title}</h2>
          </div>
          <Link href="/scripts" className="btn btn-secondary">View All</Link>
        </div>

        <div className="showcase-strip">
          {items.map((item) => (
            <Link key={item.slug} href={`/scripts/${item.slug}`} className="glass showcase-card">
              <MediaFrame src={item.thumbnail} alt={item.title} ratio="landscape" />
              <div className="showcase-card__body">
                <span className="pill">{item.categoryLabel}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
