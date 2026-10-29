
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Heart, Sparkles, Check, ShoppingBag } from 'lucide-react'

export default function OutfitDetails({
  outfit,
  onClose,
  isFavorite,
  onToggleFavorite,
}) {
  useEffect(() => {
    if (!outfit) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [outfit, onClose])

  return (
    <AnimatePresence>
      {outfit && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            className="outfit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="outfit-modal-title"
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close outfit details">
              <X size={21} />
            </button>

            <div className="modal-image-wrap">
              <img src={outfit.image} alt={outfit.name} className="modal-image" />
              <span className="modal-image-tag"><Sparkles size={13} /> {outfit.match}% style match</span>
            </div>

            <div className="modal-content">
              <span className="eyebrow">{outfit.category} / {outfit.style}</span>
              <h2 id="outfit-modal-title">{outfit.name}</h2>
              <p className="modal-description">{outfit.description}</p>

              <div className="modal-color-row">
                <span className="detail-label">THE COLOR STORY</span>
                <div className="palette-row">
                  {outfit.palette.map((color) => (
                    <span
                      className="palette-dot"
                      key={color}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="modal-detail-grid">
                <div className="modal-detail-section">
                  <h3><ShoppingBag size={16} /> The outfit</h3>
                  <ul>
                    {outfit.items.map((item) => (
                      <li key={item}><Check size={14} /> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-detail-section">
                  <h3><Sparkles size={16} /> Finishing touches</h3>
                  <ul>
                    {outfit.accessories.map((item) => (
                      <li key={item}><Check size={14} /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="styling-tip">
                <span className="tip-icon"><Sparkles size={17} /></span>
                <div>
                  <strong>YOUR STYLIST'S NOTE</strong>
                  <p>{outfit.tip}</p>
                </div>
              </div>

              <button
                className={`button ${isFavorite ? 'button-outline' : 'button-dark'} modal-favorite-button`}
                onClick={() => onToggleFavorite(outfit.id)}
              >
                <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} />
                {isFavorite ? 'Saved to favorites' : 'Save this look'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
