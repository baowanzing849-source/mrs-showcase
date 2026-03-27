import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { CategoryCards } from '@/components/CategoryCards'
import { ShowcaseStrip } from '@/components/ShowcaseStrip'
import { getFeaturedScripts } from '@/data/scripts'

export default function HomePage() {
  const featured = getFeaturedScripts()

  return (
    <>
      <Hero />
      <CategoryCards />
      <ShowcaseStrip title="Featured Projects" items={featured} />

      <section className="section">
        <div className="container promo-panel glass">
          <div>
            <p className="eyebrow">Professional</p>
            <h2>เว็บไซต์นี้สร้างขึ้นมาเพื่อโชว์ผลงานออทิสติดของเซิฟเวอร์Sector เพียงเท่านั้นไม่ขายหรือแจกอมไว้คนเดียว</h2>
            <p className="muted max-w-text">
              หีหีควยแตด โอ้ย!! รวยไม่ไหวแล้ว
            </p>
          </div>
          <div className="promo-panel__actions">
            <Link href="/scripts" className="btn btn-primary">ดูผลงานทั้งหมด</Link>
            <Link href="/contact" className="btn btn-secondary">ติดต่อ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
