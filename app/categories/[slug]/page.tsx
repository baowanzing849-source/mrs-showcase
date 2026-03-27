import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import { getScriptsByCategory } from '@/data/scripts'
import { ScriptsExplorer } from '@/components/ScriptsExplorer'

export function generateStaticParams() {
  return categories.map((item) => ({ slug: item.slug }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((item) => item.slug === params.slug)
  if (!category) notFound()

  const scripts = getScriptsByCategory(category.slug)

  return (
    <section className="page-shell">
      <div className="page-hero page-hero--full" style={{ backgroundImage: `url('${category.background}')` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__bottom-fade" />

        <div className="container page-hero__inner">
          <p className="eyebrow">Category</p>
          <h1>{category.title}</h1>
          <p className="muted max-w-text">{category.description}</p>
        </div>
      </div>

      <div className="container section section--pullup-soft">
        <ScriptsExplorer items={scripts} />
      </div>
    </section>
  )
}