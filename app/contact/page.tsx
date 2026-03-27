export default function ContactPage() {
  return (
    <section className="static-page" style={{ backgroundImage: "url('/images/backgrounds/contact.jpg')" }}>
      <div className="static-page__overlay" />
      <div className="container section">
        <div className="glass static-card">
          <p className="eyebrow">Contact</p>
          <h1>Contact</h1>
          <div className="contact-grid">
            <div className="glass contact-box">
              <h3>Discord</h3>
              <p>discord.gg/heekuyted</p>
            </div>
            <div className="glass contact-box">
              <h3>Email</h3>
              <p>baowanzing849@gmail.com</p>
            </div>
            <div className="glass contact-box">
              <h3>Brand</h3>
              <p>MR.S</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
