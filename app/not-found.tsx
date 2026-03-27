import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="static-page" style={{ backgroundImage: "url('/images/backgrounds/hero.jpg')" }}>
      <div className="static-page__overlay" />
      <div className="container section">
        <div className="glass static-card static-card--center">
          <p className="eyebrow">404</p>
          <h1>Page Not Found</h1>
          <p className="muted">หน้าที่มึงหาไม่มี</p>
          <Link href="/" className="btn btn-primary">Back Home</Link>
        </div>
      </div>
    </section>
  )
}
