import { useState } from 'react'
import { Menu, X, Heart, Sparkles, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ favoritesCount, darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Discover', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'AI Stylist', href: '#styling-studio' },
    { label: 'Trending', href: '#trending' },
  ]

  const closeMenu = () => setMenuOpen(false)

  const scrollToSection = (event, href) => {
    event.preventDefault()
    closeMenu()

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      window.history.replaceState(null, '', href)
    }
  }

  const renderLink = (link, mobile = false) => (
    <a
      key={link.label}
      className={mobile ? undefined : 'nav-link'}
      href={link.href}
      onClick={(event) => scrollToSection(event, link.href)}
    >
      {link.label}
    </a>
  )

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a
          href="#home"
          className="brand"
          onClick={(event) => scrollToSection(event, '#home')}
          aria-label="Velora home"
        >
          <span className="brand-mark">V.</span>
          <span className="brand-name">
            VELORA<span className="brand-dot">.</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => renderLink(link))}
        </nav>

        <div className="nav-actions">
          <a
            href="#styling-studio"
            className="nav-cta"
            onClick={(event) => scrollToSection(event, '#styling-studio')}
          >
            <Sparkles size={15} />
            <span>Find my style</span>
          </a>

          <a
            href="#favorites"
            className="icon-button favorite-nav"
            onClick={(event) => scrollToSection(event, '#favorites')}
            aria-label={`${favoritesCount} saved outfits`}
          >
            <Heart size={19} />
            {favoritesCount > 0 && (
              <span className="count-badge">{favoritesCount}</span>
            )}
          </a>

          <button
            className="icon-button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            type="button"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="icon-button mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((link) => renderLink(link, true))}

            <a
              href="#styling-studio"
              onClick={(event) => scrollToSection(event, '#styling-studio')}
            >
              <Sparkles size={16} />
              Find my style
            </a>

            <a
              href="#favorites"
              onClick={(event) => scrollToSection(event, '#favorites')}
            >
              <Heart size={16} />
              Saved outfits ({favoritesCount})
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
