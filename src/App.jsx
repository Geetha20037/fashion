
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Heart, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import StylingStudio from './components/StylingStudio'
import OutfitCard from './components/OutfitCard'
import OutfitDetails from './components/OutfitDetails'
import TrendsSection from './components/TrendsSection'
import Footer from './components/Footer'
import { outfits } from './data/outfits'

export default function App() {
  const [favorites, setFavorites] = useState([])
  const [activeOutfit, setActiveOutfit] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem('velora-favorites') || '[]')
      if (Array.isArray(savedFavorites)) setFavorites(savedFavorites)
      setDarkMode(localStorage.getItem('velora-theme') === 'dark')
    } catch {
      setFavorites([])
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('velora-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('velora-favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFavorite = useCallback((id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    )
  }, [])

  const favoriteOutfits = useMemo(
    () => outfits.filter((outfit) => favorites.includes(outfit.id)),
    [favorites]
  )

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    document.getElementById('styling-studio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const clearCategory = () => setSelectedCategory('')

  return (
    <div className={`app-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((current) => !current)}
      />

      <main>
        <Hero />

        <div className="trust-strip">
          <div className="container trust-strip-inner">
            <span>YOUR STYLE, YOUR RULES</span>
            <span className="trust-separator">✳</span>
            <span>PERSONALIZED INSPIRATION</span>
            <span className="trust-separator">✳</span>
            <span>CONFIDENCE IN EVERY LOOK</span>
          </div>
        </div>

        <CategorySection onSelectCategory={handleSelectCategory} />

        <StylingStudio
          onViewDetails={setActiveOutfit}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          selectedCategory={selectedCategory}
          onClearCategory={clearCategory}
        />

        <section className="section favorites-section" id="favorites">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow"><Heart size={14} /> YOUR PERSONAL COLLECTION</span>
                <h2>Looks to <em>love again.</em></h2>
              </div>
              <p className="section-side-copy">
                The outfits you love, all in one place. Save a look and it will
                be waiting for you here next time.
              </p>
            </div>

            {favoriteOutfits.length > 0 ? (
              <div className="outfit-grid favorites-grid">
                {favoriteOutfits.map((outfit, index) => (
                  <OutfitCard
                    key={outfit.id}
                    outfit={outfit}
                    index={index}
                    isFavorite
                    onToggleFavorite={toggleFavorite}
                    onViewDetails={setActiveOutfit}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-favorites">
                <div className="empty-favorites-icon"><Heart size={25} /></div>
                <h3>Your style story starts here.</h3>
                <p>Tap the heart on any outfit to add it to your personal collection.</p>
                <a href="#styling-studio" className="button button-dark">
                  Discover your looks <Sparkles size={16} />
                </a>
              </div>
            )}
          </div>
        </section>

        <TrendsSection />

        <section className="closing-cta">
          <div className="container closing-cta-inner">
            <span className="eyebrow">THIS IS YOUR SIGN</span>
            <h2>Good style starts with <em>you.</em></h2>
            <p>Come as you are. Leave with a look that feels like you.</p>
            <a className="button button-cream" href="#styling-studio">
              Let's find your look <Sparkles size={16} />
            </a>
            <span className="closing-decoration">V.</span>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-to-top"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>

      <OutfitDetails
        outfit={activeOutfit}
        onClose={() => setActiveOutfit(null)}
        isFavorite={activeOutfit ? favorites.includes(activeOutfit.id) : false}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  )
}



