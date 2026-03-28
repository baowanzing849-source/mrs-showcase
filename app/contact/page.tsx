import Link from 'next/link'

export default function ContactPage() {
  return (
    <section
      className="static-page"
      style={{ backgroundImage: "url('/images/backgrounds/contact.jpg')" }}
    >
      <div className="static-page__overlay" />

      <div className="container section">
        <div
          className="glass static-card"
          style={{
            padding: '36px',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '28px',
              alignItems: 'stretch',
            }}
          >
            {/* LEFT SIDE */}
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

                <p
                  className="muted"
                  style={{
                    marginTop: '18px',
                    maxWidth: '720px',
                    fontSize: '16px',
                    lineHeight: 1.85,
                  }}
                >
                  ช่องทางติดต่อหลักสำหรับงานโชว์ผลงาน พูดคุยรายละเอียดระบบ
                  ปรึกษาแนวทางพัฒนา และติดตามอัปเดตต่าง ๆ ของผลงานทั้งหมด
                  ในสไตล์ที่ชัด ตรง และทำงานได้จริง
                </p>
              </div>

              <div
                style={{
                  marginTop: '28px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
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

              <div
                style={{
                  marginTop: '26px',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.66)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                }}
              >
                ช่องทางหลักที่แนะนำ: Discord
                <br />
                เวลาตอบกลับเร็วที่สุด: ช่วงที่ออนไลน์ในเซิร์ฟเวอร์ / Discord
              </div>
            </div>

            {/* RIGHT SIDE */}
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
                  padding: '22px',
                  minHeight: 'unset',
                }}
              >
                <p
                  className="eyebrow"
                  style={{ marginBottom: '10px', letterSpacing: '0.18em' }}
                >
                  Primary Channel
                </p>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Discord</h3>
                <p
                  style={{
                    marginBottom: '16px',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 700,
                    fontSize: '18px',
                    wordBreak: 'break-word',
                  }}
                >
                  discord.gg/heekuyted
                </p>
                <Link
                  href="https://discord.gg/heekuyted"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Join Server
                </Link>
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
                    Email
                  </p>
                  <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Direct</h3>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,0.88)',
                      fontWeight: 600,
                      wordBreak: 'break-word',
                    }}
                  >
                    baowanzing849@gmail.com
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
                    Brand
                  </p>
                  <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Identity</h3>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,0.88)',
                      fontWeight: 700,
                    }}
                  >
                    MR.S
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
                  Note
                </p>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Showcase & Communication
                </h3>
                <p style={{ margin: 0 }}>
                  หน้านี้ใช้สำหรับติดต่อเกี่ยวกับผลงาน การนำเสนอระบบ
                  และการพูดคุยงานที่เกี่ยวข้องกับโปรเจกต์ของเซิร์ฟเวอร์
                  เป็นหลัก
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}