import Link from 'next/link'
import type { ScriptItem } from '@/data/scripts'
import { MediaFrame } from '@/components/MediaFrame'

export function ScriptCard({ script }: { script: ScriptItem }) {
  return (
    <article className="glass script-card">
      <Link href={`/scripts/${script.slug}`} className="script-card__media-link">
        <MediaFrame src={script.thumbnail} alt={script.title} ratio="landscape" />
      </Link>
      <div className="script-card__body">
        <span className="pill">{script.categoryLabel}</span>
        <h3>{script.title}</h3>
        <p>{script.summary}</p>
        <div className="script-card__footer">
          <span className="script-card__status">{script.status}</span>
          <Link href={`/scripts/${script.slug}`} className="btn btn-primary btn-sm">View Details</Link>
        </div>
      </div>
    </article>
  )
}
