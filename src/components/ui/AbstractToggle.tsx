import { useState } from 'react'

interface Props {
  abstract: string
}

export default function AbstractToggle({ abstract }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-xs text-slate-500 hover:text-brand-600 transition-colors"
      >
        <svg
          className={`w-3 h-3 transition-transform duration-150 ${open ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        Abstract
      </button>
      {open && (
        <p className="mt-2 text-sm text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-3">
          {abstract}
        </p>
      )}
    </div>
  )
}
