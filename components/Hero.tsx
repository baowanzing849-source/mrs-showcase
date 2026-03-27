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
            ยินดีต้อนรับเข้าสู่ระบบในจินตนาการของ MR.S
            มาร่วมเป็นส่วนหนึ่งของเราและสนับสนุนเรา
            เพื่อความเบียวที่ยิ่งขึ้นและยิ่งใหญ่
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
          <h2>PROFESSIONAL KHMER DEVELOPER</h2>

          <p>
           ผลงานชุดนี้ถูกรังสรรค์ อย่างพิถีพิถันโดย เด็กเอ๋อปัญญาอ่อน
            เหมาะสำหรับผู้ที่ถอดสมองแล้วหรือไม่มีสมองมาตั้งแต่แรก
          </p>

          <p>
            เราถนัดการเลียนแบบและมือโปรในการคัดลอกวาง
            แค่เปลี่ยนแปลงเล็กน้อยเราก็ภาคภูมิใจในผลงานที่ขโมยคนอื่นมา
          </p>
        </div>
      </div>
    </section>
  )
}