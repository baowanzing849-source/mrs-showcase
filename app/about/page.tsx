export default function AboutPage() {
  return (
    <section className="static-page" style={{ backgroundImage: "url('/images/backgrounds/about.jpg')" }}>
      <div className="static-page__overlay" />
      <div className="container section">
        <div className="glass static-card">
          <p className="eyebrow">About</p>
          <h1>About MR.S Showcase</h1>
          <p>
            โครงการถูกทำขึ้นเพื่ออวดระบบที่สุดแสนจะธรรมดาแต่กระผมนั้นอยากโชว์เพื่อให้รับทราบถึงท่านอาจจะไม่ได้อยากรับทราบรับรู้ก็ตาม
          </p>
          <p>
            ขอบคุณที่ให้ความสนใจและเสียเวลากดเข้ามาดูทั้งที่เวลาที่ท่านดูอะไรปัญญาอ่อนเช่นนี้ท่านอาจจะใช้ไปทำประโยชน์ได้อีกเยอะเช่นชักว่าวเป็นต้น
          </p>
        </div>
      </div>
    </section>
  )
}
