import { Link, useLocation } from 'react-router-dom'
import { collections } from '../../services/content'

export default function Navbar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  function navHref(id: string) {
    return onHome ? `#${id}` : `/#${id}`
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--purple)] text-white shadow">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="font-semibold tracking-wide">
          Home
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm">
          {collections.map(({ id, label, comingSoon }) => (
            <li key={id}>
              <a href={navHref(id)} className="hover:opacity-80">
                {label}
                {comingSoon && (
                  <span className="ml-1 text-xs opacity-70">(soon)</span>
                )}
              </a>
            </li>
          ))}
          <li>
            <a href={navHref('contact')} className="hover:opacity-80">Contact</a>
          </li>
        </ul>

        {/* placeholder — terminal view comes later */}
        <button
          type="button"
          disabled
          className="text-xs opacity-50 cursor-not-allowed border border-white/40 px-2 py-1 rounded"
          title="Coming soon"
        >
          Terminal - IN PROGRESS
        </button>
      </nav>
    </header>
  )
}