import Link from 'next/link'

export default function ContactPage() {
  return (
    <section
      className="static-page"
      style={{ backgroundImage: "url('/images/backgrounds/contact.jpg')" }}
    >
      <div className="static-page__overlay" />
      <div className="static-page__noise" />

      <div className="container section">
        <div className="glass static-card static-page-shell">
          <div className="static-page-grid">
            <div className="static-page-main">
              <div>
                <p className="eyebrow" style={{ marginBottom: '14px' }}>
                  Contact / Connect
                </p>

                <h1
                  style={{
                    margin: 0,
                    maxWidth: '8ch',
                  }}
                >
                  Contact
                  <br />
                  MR.S
                </h1>

                <p className="muted static-page-lead">
                  ช่องทางหลักสำหรับติดต่อเกี่ยวกับผลงาน การสอบถามรายละเอียดระบบ
                  การพูดคุยแนวทางพัฒนา และติดตามอัปเดตต่าง ๆ ของโปรเจกต์ทั้งหมด
                  ในสไตล์ที่ชัด ตรง และใช้งานได้จริง
                </p>
              </div>

              <div className="static-page-actions">
                <Link
                  href="https://discord.gg/heekuyted"
                  target="_blank"
                  className="btn btn-primary"
                >
                  เปิด Discord
                </Link>

                <Link
                  href="mailto:baowanzing849@gmail.com"
                  className="btn btn-secondary"
                >
                  ส่ง Email
                </Link>
              </div>

              <div className="static-page-note">
                ช่องทางหลักที่แนะนำ: Discord
                <br />
                ช่องทางสำรอง: Email
              </div>
            </div>

            <div className="static-page-side">
              <div className="glass contact-box static-info-card">
                <p className="eyebrow static-info-card__eyebrow">Primary Channel</p>
                <h3>Discord</h3>
                <p className="static-info-card__value">discord.gg/heekuyted</p>

                <Link
                  href="https://discord.gg/heekuyted"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Join Server
                </Link>
              </div>

              <div className="static-mini-grid">
                <div className="glass contact-box static-info-card">
                  <p className="eyebrow static-info-card__eyebrow">Email</p>
                  <h3>Direct</h3>
                  <p className="static-info-card__value static-info-card__value--small">
                    baowanzing849@gmail.com
                  </p>
                </div>

                <div className="glass contact-box static-info-card">
                  <p className="eyebrow static-info-card__eyebrow">Brand</p>
                  <h3>Identity</h3>
                  <p className="static-info-card__value static-info-card__value--small">
                    MR.S
                  </p>
                </div>
              </div>

              <div className="glass contact-box static-info-card">
                <p className="eyebrow static-info-card__eyebrow">Communication Note</p>
                <h3>Showcase & Coordination</h3>
                <p>
                  หน้านี้ใช้สำหรับติดต่อเกี่ยวกับผลงาน การนำเสนอระบบ
                  และการพูดคุยงานที่เกี่ยวข้องกับโปรเจกต์ของเซิร์ฟเวอร์เป็นหลัก
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}