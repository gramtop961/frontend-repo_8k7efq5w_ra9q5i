import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/flame-icon.svg" alt="NGO" className="w-8 h-8" />
            <span className="text-white text-lg font-semibold group-hover:opacity-90">Our NGO</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/news" className={linkClass}>News</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/gallery/upload" className="px-3 py-2 text-sm rounded-md bg-blue-500 hover:bg-blue-600 text-white">Upload Image</Link>
            <Link to="/news/upload" className="px-3 py-2 text-sm rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">Post News</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
