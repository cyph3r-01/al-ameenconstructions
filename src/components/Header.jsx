import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { company } from '../data/siteData'
import Icon from './Icon'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/construction', label: 'Construction' },
  { to: '/equipment', label: 'Equipment & Machinery' },
  { to: '/materials', label: 'Materials & Supply' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
]

const linkClass = ({ isActive }) =>
  `font-semibold transition-colors duration-150 ${isActive ? 'text-accent' : 'text-primary-black hover:text-accent'}`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-secondary-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" onClick={close} aria-label={`${company.name}, home`}>
          <img src="/images/logo.png" alt={`${company.name} logo`} className="h-14 md:h-16 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex gap-6 items-center text-sm">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-accent font-semibold text-sm">
            <Icon name="clock" /> 24/7 operations
          </div>
          <Link to="/contact" className="btn btn-accent">Get a quote</Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-primary-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <FiX size={28} aria-hidden="true" /> : <FiMenu size={28} aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Main" className="lg:hidden bg-white border-t border-secondary-border p-4 space-y-3">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={(s) => `block py-1 ${linkClass(s)}`} onClick={close}>{l.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-accent w-full" onClick={close}>Get a quote</Link>
        </nav>
      )}
    </header>
  )
}
