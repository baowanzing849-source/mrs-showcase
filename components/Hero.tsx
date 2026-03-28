import Link from 'next/link'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__noise" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__brand">MR.S SHOWCASE</p>
          <p className="eyebrow">Premium Script Portfolio</p>

          <h1>WELCOME TO MR.S DEVELOPMENT</h1>

          <p className="muted max-w-text">
            พื้นที่โชว์ผลงานที่ออกแบบให้มีภาพลักษณ์เข้ม ดุดัน และดูจริงจังมากขึ้น
            เพื่อยกระดับการนำเสนอระบบต่าง ๆ ให้ดูมีตัวตน มีมูลค่า
            และมีสไตล์ที่ชัดในแบบของเซิร์ฟเวอร์มึง
          </p>

          <div className="hero__actions">
            <Link href="/scripts" className="btn btn-primary">
              Explore Project
            </Link>

            <Link href="/about" className="btn btn-secondary">
              About Project
            </Link>
          </div>
        </div>

        <div className="glass hero__panel">
          <p className="eyebrow">POWER BY</p>
          <h2>APOCALYPSE SHOWCASE EXPERIENCE</h2>

          <p>
            ดีไซน์ชุดนี้ถูกวางให้มีทั้งความลึกของเลเยอร์ แสง เงา glow และ panel
            ที่ดูเข้มขึ้น เพื่อทำให้เว็บดูเหมือนงาน presentation
            ของแบรนด์หรือสตูดิโอจริง มากกว่าหน้าเว็บธรรมดาทั่วไป
          </p>

          <p>
            เป้าหมายคือทำให้ทุกผลงานที่เอาขึ้นมาโชว์ ดูมีน้ำหนัก ดูแพง
            และดูพร้อมถูกนำเสนอในระดับที่คนเข้ามาแล้วรู้สึกได้ทันทีว่า
            เว็บนี้มีธีม มี character และมีทิศทางชัดเจน
          </p>
        </div>
      </div>
    </section>
  )
}