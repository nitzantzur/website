import { useState, useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSearch<T extends Record<string, any>>(
  items: T[],
  searchFields: (keyof T)[],
  tagField?: keyof T
) {
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const allTags = useMemo(() => {
    if (!tagField) return []
    const tagSet = new Set<string>()
    items.forEach((item) => {
      const tags = item[tagField]
      if (Array.isArray(tags)) {
        tags.forEach((t: string) => tagSet.add(t))
      }
    })
    return Array.from(tagSet).sort()
  }, [items, tagField])

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    )
  }

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()

    return items.filter((item) => {
      const matchesQuery =
        q === '' ||
        searchFields.some((field) => {
          const val = item[field]
          if (typeof val === 'string') return val.toLowerCase().includes(q)
          if (Array.isArray(val)) return val.some((v: unknown) => String(v).toLowerCase().includes(q))
          if (typeof val === 'number') return String(val).includes(q)
          return false
        })

      const matchesFilters =
        activeFilters.length === 0 ||
        (tagField
          ? activeFilters.every((f) => {
              const tags = item[tagField]
              return Array.isArray(tags) && tags.includes(f)
            })
          : true)

      return matchesQuery && matchesFilters
    })
  }, [items, query, searchFields, activeFilters, tagField])

  return { query, setQuery, activeFilters, toggleFilter, results, allTags }
}
