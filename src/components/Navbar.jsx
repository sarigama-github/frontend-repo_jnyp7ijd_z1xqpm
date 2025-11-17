import { Link, NavLink } from 'react-router-dom'
import { Shield, Server, Layers, BookOpenText, FileText, Mail, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-blue-600 text-white">
              <Shield className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-slate-500">Stephan</p>
              <p className="text-sm font-semibold text-slate-800">SysAdmin & Security</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/system-administration" className={navLinkClass}>
              <span className="inline-flex items-center gap-1"><Server className="w-4 h-4" /> System Administration</span>
            </NavLink>
            <NavLink to="/security" className={navLinkClass}>
              <span className="inline-flex items-center gap-1"><Shield className="w-4 h-4" /> Security</span>
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/case-studies" className={navLinkClass}>
              <span className="inline-flex items-center gap-1"><Layers className="w-4 h-4" /> Case Studies</span>
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              <span className="inline-flex items-center gap-1"><BookOpenText className="w-4 h-4" /> Blog</span>
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              <Mail className="w-4 h-4" /> Get in Touch
            </Link>
          </div>

          <button aria-label="Open menu" className="md:hidden p-2 rounded-md border border-slate-200" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            <NavLink to="/" end className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/system-administration" className={navLinkClass} onClick={() => setOpen(false)}>System Administration</NavLink>
            <NavLink to="/security" className={navLinkClass} onClick={() => setOpen(false)}>Security</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/case-studies" className={navLinkClass} onClick={() => setOpen(false)}>Case Studies</NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={() => setOpen(false)}>Blog</NavLink>
            <Link to="/contact" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors" onClick={() => setOpen(false)}>
              <Mail className="w-4 h-4" /> Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
