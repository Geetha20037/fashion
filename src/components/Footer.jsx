
import { ArrowUpRight, Instagram, Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">V.</span>
              <span className="brand-name">VELORA<span className="brand-dot">.</span></span>
            </a>
            <p>
              A little less what to wear.
              <br />
              A little more absolutely you.
            </p>
            <a className="footer-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <Instagram size={17} /> Follow the inspiration <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="footer-links-column">
            <h3>EXPLORE</h3>
            <a href="#collections">Collections</a>
            <a href="#styling-studio">AI Stylist</a>
            <a href="#trending">Style Journal</a>
            <a href="#favorites">Your favorites</a>
          </div>

          <div className="footer-links-column">
            <h3>YOUR VELORA</h3>
            <a href="#styling-studio">Find your aesthetic</a>
            <a href="#collections">Discover your mood</a>
            <a href="#trending">Latest inspiration</a>
            <a href="#home">Back to top â†‘</a>
          </div>

          <div className="footer-note">
            <span className="footer-note-icon"><Sparkles size={20} /></span>
            <h3>Style, without the guesswork.</h3>
            <p>Your next favorite outfit might be one click away.</p>
            <a href="#styling-studio" className="footer-cta">Meet your stylist <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Â© {new Date().getFullYear()} VELORA STUDIO. MADE WITH <Heart size={12} fill="currentColor" /> FOR YOUR STYLE.</span>
          <span>FASHION IS PERSONAL. ALWAYS.</span>
        </div>
      </div>
    </footer>
  )
}

