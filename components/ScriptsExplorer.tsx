'use client'

import { useMemo, useState } from 'react'
import type { ScriptItem } from '@/data/scripts'
import { ScriptCard } from '@/components/ScriptCard'

const filterOptions = ['All', 'Apocalypse', 'Combat / AI', 'UI / HUD', 'Regular']

export function ScriptsExplorer({ items }: { items: ScriptItem[] }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return items.filter((item) => {
      const matchFilter = filter === 'All' || item.categoryLabel === filter
      const matchQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.framework.toLowerCase().includes(q)

      return matchFilter && matchQuery
    })
  }, [items, query, filter])

  return (
    <div className="glass explorer">
      <div className="explorer__bar">
        <div className="explorer__search-wrap">
          <input
            className="explorer__search"
            placeholder="Search any project..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="explorer__filters">
          {filterOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-chip ${filter === item ? 'is-active' : ''}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="script-grid">
          {filtered.map((item) => (
            <ScriptCard key={item.slug} script={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No Results</h3>
          <p className="muted">ไม่เจองานที่ตรงกับคำค้นหรือหมวดที่เลือก</p>
        </div>
      )}
    </div>
  )
}
