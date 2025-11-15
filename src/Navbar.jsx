import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const Item = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full btn-glass transition ${isActive ? 'ring-lavender' : ''}`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl lavender-gradient glow-lavender grid place-items-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="font-semibold tracking-wide">AstraCut Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-3">
          {navItems.map((n) => (
            <Item key={n.to} {...n} />
          ))}
        </nav>
        <button className="md:hidden btn-glass p-2" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 h-full w-72 glass glow-lavender soft-shadow p-6 md:hidden transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="font-semibold">Menu</span>
          <button className="btn-glass p-2" onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid gap-3">
          {navItems.map((n) => (
            <Item key={n.to} {...n} />
          ))}
        </div>
      </div>
    </header>
  )
}
