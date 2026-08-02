import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import MobileNav from './MobileNav'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/publications', label: 'Publications' },
  { to: '/working-papers', label: 'Working Papers' },
  { to: '/media', label: 'Media' },
  { to: '/talks', label: 'Talks' },
  { to: '/service', label: 'Service' },
]

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-sm bg-white/95 backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between relative">
        <Link
          to="/"
          className="text-sm font-semibold text-slate-800 tracking-tight hover:text-brand-700 transition-colors"
        >
          Nitzan Tzur-Ilan
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link text-sm pb-0.5 ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>

        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  )
}
