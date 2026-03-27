'use client'

import Link from 'next/link'
import { useState } from 'react'
import { categories } from '@/data/categories'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link href="/" className="brand">
          <span className="brand__logo">M</span>
          <span className="brand__text">MR.S SHOWCASE</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button type="button" className="nav-dropdown__btn">
              Scripts <span className={`nav-dropdown__caret ${open ? 'is-open' : ''}`}>⌄</span>
            </button>

            <div className={`nav-dropdown__panel glass ${open ? 'is-visible' : ''}`}>
              {categories.map((item) => (
                <Link key={item.slug} href={`/categories/${item.slug}`} className="nav-dropdown__item">
                  {item.title}
                </Link>
              ))}
              <Link href="/scripts" className="nav-dropdown__item nav-dropdown__item--all">
                View All Scripts
              </Link>
            </div>
          </div>

          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
