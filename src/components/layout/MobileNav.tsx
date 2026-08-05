import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/publications', label: 'Publications' },
  { to: '/working-papers', label: 'Working Papers' },
  { to: '/policy-publications', label: 'Policy Publications' },
  { to: '/media', label: 'Media' },
  { to: '/talks', label: 'Talks' },
  { to: '/service', label: 'Service' },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-sm z-40"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
