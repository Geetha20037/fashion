
import { motion } from 'framer-motion'
import { Heart, ArrowUpRight, Sparkles } from 'lucide-react'

export default function OutfitCard({
  outfit,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
  index = 0,
}) {
  return (
    <motion.article
      className="outfit-card"
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
    >
      <div className="outfit-image-wrap">
        <button
          type="button"
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          onClick={() => onToggleFavorite(outfit.id)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        <img
          className="outfit-image"
          src={outfit.image}
          alt={outfit.name}
          loading="lazy"
        />

        <span className="outfit-category-pill">{outfit.category}</span>
        <span className="outfit-match"><Sparkles size={12} /> {outfit.match}% match</span>

        <button
          className="outfit-image-action"
          onClick={() => onViewDetails(outfit)}
          aria-label={`View details for ${outfit.name}`}
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="outfit-card-body">
        <div className="outfit-card-meta">
          <span>{outfit.style} edit</span>
          <span>{outfit.season}</span>
        </div>
        <button className="outfit-name-button" onClick={() => onViewDetails(outfit)}>
          <h3>{outfit.name}</h3>
        </button>
        <p>{outfit.description}</p>
        <div className="palette-row" aria-label={`Matching colors for ${outfit.name}`}>
          {outfit.palette.map((color) => (
            <span
              className="palette-dot"
              key={color}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
          <button className="view-look-link" onClick={() => onViewDetails(outfit)}>
            View look <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
