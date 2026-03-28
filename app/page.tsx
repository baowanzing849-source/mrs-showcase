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
          
          {/* LEFT CONTENT */}
          <div className="promo-panel__content">
            <p className="eyebrow">Professional</p>

            <h2 className="promo-panel__title">
              เว็บไซต์นี้สร้างขึ้นมาเพื่อโชว์ผลงานของเซิร์ฟเวอร์ Sector 
              เท่านั้น ไม่ขาย ไม่แจก เป็นผลงานส่วนตัว
            </h2>

            <p className="muted promo-panel__desc">
              ระบบทั้งหมดถูกพัฒนาแบบมืออาชีพ เน้นความเสถียร ความสวยงาม 
              และประสบการณ์ผู้เล่นระดับสูง
            </p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="promo-panel__actions">
            <Link href="/scripts" className="btn btn-primary">
              ดูผลงานทั้งหมด
            </Link>

            <Link href="/contact" className="btn btn-secondary">
              ติดต่อ
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}