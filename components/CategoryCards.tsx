import Link from 'next/link'
import { categories } from '@/data/categories'

export function CategoryCards() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Project Categories</p>
          <h2>เลือกดูตามหมวด</h2>
          <p className="muted max-w-text">สามารถเลือกดูตามหมวดหมู่ที่คุณสนใจได้เลย แต่เลือกอันไหนก็เหมือนกันตั้งมาให้งงเฉยๆ</p>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/categories/${item.slug}`}
              className="category-card"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.35), rgba(10,10,10,0.85)), url('${item.background}')` }}
            >
              <div className="category-card__inner">
                <span className="pill">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="category-card__link">Open Category →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
