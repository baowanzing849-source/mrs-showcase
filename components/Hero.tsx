import Link from 'next/link'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__noise" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__brand">MR.S SHOWCASE</p>
          <p className="eyebrow">Premium Script</p>

          <h1>WELCOME TO MR.S DEVELOPMENT</h1>

          <p className="muted max-w-text">
            พื้นที่โชว์ผลงานและการออกแบบ ระบบต่างๆของ FIVEM
            เพื่อยกระดับระบบให้มีความแปลกใหม่น่าสนใจ ทันสมัย
            และมีสไตล์ที่ชัดในแบบของเซิร์ฟเวอร์ SECTOR
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
            ระบบถูกจัดทำโดยพิถีพิถัน เพื่อยกระดับวงการเกม
            มีความใส่ใจในลายระเอียดและพัฒนาระบบอย่างต่อเนื่อง
            ด้วยความร่วมระหว่าง MR.S & MR.C 
          </p>

          <p>
            เป้าหมายคือทำให้ทุกผลงานที่เอาขึ้นมาโชว์ ดูมีน้ำหนัก ดูแพง
            และดูพร้อมถูกนำเสนอในระดับที่คนเข้ามาแล้วรู้สึกได้ทันทีว่า
            นี่คือผลงาน ที่มี character และมีทิศทางชัดเจน
          </p>
        </div>
      </div>
    </section>
  )
}