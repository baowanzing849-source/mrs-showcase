import { getAllScripts } from '@/data/scripts'
import { ScriptsExplorer } from '@/components/ScriptsExplorer'

export default function ScriptsPage() {
  const scripts = getAllScripts()

  return (
    <section className="page-shell">
      <div className="page-hero" style={{ backgroundImage: "url('/images/backgrounds/scripts-hero.jpg')" }}>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <p className="eyebrow">All Script</p>
          <h1>Script Showcase</h1>
          <p className="muted max-w-text">
            รวมผลงาน Script ทุกหมวดหมู่
          </p>
        </div>
      </div>

      <div className="container section section--pullup">
        <ScriptsExplorer items={scripts} />
      </div>
    </section>
  )
}
