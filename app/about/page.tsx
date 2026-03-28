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
        <div
          className="glass static-card"
          style={{
            padding: '38px',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '28px',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minWidth: 0,
              }}
            >
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

                <p
                  className="muted"
                  style={{
                    marginTop: '20px',
                    maxWidth: '760px',
                    fontSize: '16px',
                    lineHeight: 1.9,
                  }}
                >
                  พื้นที่นี้ถูกสร้างขึ้นเพื่อใช้เป็นหน้าโชว์ผลงานของระบบต่าง ๆ
                  ภายใต้แนวทางการออกแบบที่เน้นภาพลักษณ์หนักแน่น ดุดัน และเข้าธีม
                  apocalypse อย่างชัดเจน ทั้งในมุมของงานภาพ งาน UX
                  และการจัดวางข้อมูลให้ดูจริงจังมากขึ้น
                </p>

                <p
                  className="muted"
                  style={{
                    marginTop: '16px',
                    maxWidth: '760px',
                    fontSize: '16px',
                    lineHeight: 1.9,
                  }}
                >
                  จุดประสงค์หลักของหน้านี้คือทำให้ผลงานแต่ละชิ้นมีตัวตนชัดขึ้น
                  ไม่ใช่แค่แปะรูปหรือแปะชื่อระบบเฉย ๆ แต่ทำให้ทุกโปรเจกต์ดูมีมูลค่า
                  มีเอกลักษณ์ และพร้อมถูกนำเสนอในระดับที่ดูเป็นแบรนด์จริง
                </p>
              </div>

              <div
                style={{
                  marginTop: '30px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <Link href="/scripts" className="btn btn-primary">
                  ดูผลงานทั้งหมด
                </Link>

                <Link href="/contact" className="btn btn-secondary">
                  ติดต่อ
                </Link>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
                alignContent: 'start',
              }}
            >
              <div
                className="glass contact-box"
                style={{
                  padding: '24px',
                  minHeight: 'unset',
                }}
              >
                <p
                  className="eyebrow"
                  style={{ marginBottom: '10px', letterSpacing: '0.18em' }}
                >
                  Positioning
                </p>

                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Premium Showcase
                </h3>

                <p style={{ margin: 0 }}>
                  เว็บนี้ไม่ได้วางตัวเป็นหน้าเก็บลิงก์ธรรมดา
                  แต่ถูกออกแบบให้มีภาพลักษณ์แบบ premium showcase
                  ที่ยกคุณภาพงานให้ดูจริงจังขึ้น
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div
                  className="glass contact-box"
                  style={{
                    padding: '22px',
                    minHeight: 'unset',
                  }}
                >
                  <p
                    className="eyebrow"
                    style={{ marginBottom: '10px', letterSpacing: '0.18em' }}
                  >
                    Theme
                  </p>
                  <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Apocalypse</h3>
                  <p style={{ margin: 0 }}>
                    โทนภาพรวมมืด ดิบ เข้ม และมีแสงส้มแบบ ember / neon
                  </p>
                </div>

                <div
                  className="glass contact-box"
                  style={{
                    padding: '22px',
                    minHeight: 'unset',
                  }}
                >
                  <p
                    className="eyebrow"
                    style={{ marginBottom: '10px', letterSpacing: '0.18em' }}
                  >
                    Focus
                  </p>
                  <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Showcase</h3>
                  <p style={{ margin: 0 }}>
                    เน้นโชว์คุณภาพงาน ภาพลักษณ์ และ flow ของการนำเสนอ
                  </p>
                </div>
              </div>

              <div
                className="glass contact-box"
                style={{
                  padding: '22px',
                  minHeight: 'unset',
                }}
              >
                <p
                  className="eyebrow"
                  style={{ marginBottom: '10px', letterSpacing: '0.18em' }}
                >
                  Direction
                </p>

                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Visual & Identity
                </h3>

                <p style={{ margin: 0 }}>
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