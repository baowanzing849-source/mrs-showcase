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
                    marginTop: '20px',
                    maxWidth: '720px',
                    fontSize: '16px',
                    lineHeight: 1.85,
                  }}
                >
                  ช่องทางหลักสำหรับติดต่อเกี่ยวกับผลงาน การสอบถามรายละเอียดระบบ
                  การพูดคุยแนวทางพัฒนา และติดตามอัปเดตต่าง ๆ ของโปรเจกต์ทั้งหมด
                  ในสไตล์ที่ชัด ตรง และใช้งานได้จริง
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
                  marginTop: '28px',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.66)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                }}
              >
                ช่องทางหลักที่แนะนำ: Discord
                <br />
                ช่องทางสำรอง: Email
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
                  Communication Note
                </p>

                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Showcase & Coordination
                </h3>

                <p style={{ margin: 0 }}>
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