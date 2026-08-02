import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export default function ExternalLink({ href, children, className = '' }: Props) {
  if (!href || href.includes('PLACEHOLDER')) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-default text-sm inline-flex items-center gap-1 ${className}`}
    >
      {children}
      <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a>
  )
}
