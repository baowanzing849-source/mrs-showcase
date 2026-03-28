'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { categories } from '@/data/categories'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link href="/" className="brand" aria-label="Go to homepage">
          <Image
            src="/images/logo.png"
            alt="MR.S Logo"
            width={96}
            height={96}
            priority
            draggable={false}
            style={{
              width: '96px',
              height: '96px',
              objectFit: 'contain',
              display: 'block',
              userSelect: 'none',
            }}
          />
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>

          <div ref={dropdownRef} className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown__btn"
              aria-expanded={open}
              aria-haspopup="menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              Scripts{' '}
              <span className={`nav-dropdown__caret ${open ? 'is-open' : ''}`}>
                ⌄
              </span>
            </button>

            <div className={`nav-dropdown__panel glass ${open ? 'is-visible' : ''}`}>
              {categories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/categories/${item.slug}`}
                  className="nav-dropdown__item"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/scripts"
                className="nav-dropdown__item nav-dropdown__item--all"
                onClick={() => setOpen(false)}
              >
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