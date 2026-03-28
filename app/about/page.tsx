import Link from 'next/link'

export default function AboutPage() {
  return (
    <section
      className="static-page"
      style={{ backgroundImage: "url('/images/backgrounds/about.jpg')" }}
    >
      <div className="static-page__overlay" />
      <div className="static-page__noise" />

      <div className="container section">
        <div className="glass static-card static-page-shell">
          <div className="static-page-grid">
            <div className="static-page-main">
              <div>
                <p className="eyebrow" style={{ marginBottom: '14px' }}>
                  About / Identity
                </p>

                <h1
                  style={{
                    margin: 0,
                    maxWidth: '8ch',
                  }}
                >
                  About
                  <br />
                  MR.S
                </h1>

                <p className="muted static-page-lead">
                  พื้นที่นี้ถูกสร้างขึ้นเพื่อใช้เป็นหน้าโชว์ผลงานของระบบต่าง ๆ
                  ภายใต้แนวทางการออกแบบที่เน้นภาพลักษณ์หนักแน่น ดุดัน และเข้าธีม
                  apocalypse อย่างชัดเจน ทั้งในมุมของงานภาพ งาน UX
                  และการจัดวางข้อมูลให้ดูจริงจังมากขึ้น
                </p>

                <p className="muted static-page-lead">
                  จุดประสงค์หลักของหน้านี้คือทำให้ผลงานแต่ละชิ้นมีตัวตนชัดขึ้น
                  ไม่ใช่แค่แปะรูปหรือแปะชื่อระบบเฉย ๆ แต่ทำให้ทุกโปรเจกต์ดูมีมูลค่า
                  มีเอกลักษณ์ และพร้อมถูกนำเสนอในระดับที่ดูเป็นแบรนด์จริง
                </p>
              </div>

              <div className="static-page-actions">
                <Link href="/scripts" className="btn btn-primary">
                  ดูผลงานทั้งหมด
                </Link>

                <Link href="/contact" className="btn btn-secondary">
                  ติดต่อ
                </Link>
              </div>
            </div>

            <div className="static-page-side">
              <div className="glass contact-box static-info-card">
                <p className="eyebrow static-info-card__eyebrow">Positioning</p>
                <h3>Premium Showcase</h3>
                <p>
                  เว็บนี้ไม่ได้วางตัวเป็นหน้าเก็บลิงก์ธรรมดา
                  แต่ถูกออกแบบให้มีภาพลักษณ์แบบ premium showcase
                  ที่ยกคุณภาพงานให้ดูจริงจังขึ้น
                </p>
              </div>

              <div className="static-mini-grid">
                <div className="glass contact-box static-info-card">
                  <p className="eyebrow static-info-card__eyebrow">Theme</p>
                  <h3>Apocalypse</h3>
                  <p>โทนภาพรวมมืด ดิบ เข้ม และมีแสงส้มแบบ ember / neon</p>
                </div>

                <div className="glass contact-box static-info-card">
                  <p className="eyebrow static-info-card__eyebrow">Focus</p>
                  <h3>Showcase</h3>
                  <p>เน้นโชว์คุณภาพงาน ภาพลักษณ์ และ flow ของการนำเสนอ</p>
                </div>
              </div>

              <div className="glass contact-box static-info-card">
                <p className="eyebrow static-info-card__eyebrow">Direction</p>
                <h3>Visual & Identity</h3>
                <p>
                  ทุกองค์ประกอบถูกปรับให้ดูเป็นระบบเดียวกันมากขึ้น
                  ทั้ง typography, glow, panel, spacing และโครงสร้างหน้า
                  เพื่อให้เว็บดูมี character และจำได้ง่าย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}