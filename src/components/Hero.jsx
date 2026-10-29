
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            YOUR STYLE, REIMAGINED
          </div>

          <h1>
            Dress like
            <br />
            <span>you mean it.</span>
          </h1>

          <p className="hero-description">
            Your personal AI stylist is here. Discover outfits that feel like
            you, find your colors, and make getting dressed the best part of
            your day.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#styling-studio">
              Find your look <ArrowRight size={17} />
            </a>
            <a className="button button-light" href="#collections">
              Explore collections <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80" alt="" />
            </div>
            <div>
              <div className="proof-stars">â˜…â˜…â˜…â˜…â˜…</div>
              <p>Made for your kind of style</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=90"
            alt="Fashion editorial featuring a modern, elegant outfit"
          />

          <div className="hero-image-label">
            <span>THE VELORA EDIT</span>
            <p>Less guessing. More you.</p>
          </div>

          <div className="floating-style-card">
            <div className="floating-icon"><Sparkles size={18} /></div>
            <div>
              <span className="floating-label">YOUR STYLE MATCH</span>
              <strong>Quiet luxury</strong>
              <div className="match-track"><span /></div>
              <small>98% style compatibility</small>
            </div>
          </div>

          <div className="hero-number">01 / 04</div>
          <span className="hero-decoration">V</span>
        </motion.div>
      </div>

      <div className="container hero-bottom">
        <span>STYLE IS PERSONAL. SO ARE WE.</span>
        <a href="#collections">Scroll to discover <ArrowDownRight size={15} /></a>
      </div>
    </section>
  )
}

