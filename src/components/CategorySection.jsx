
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '../data/outfits'

export default function CategorySection({ onSelectCategory }) {
  return (
    <section className="section category-section" id="collections">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR EVERY YOU</span>
            <h2>Find your <em>fashion mood.</em></h2>
          </div>
          <p className="section-side-copy">
            Different days, different sides of you. There's a look for every
            version of yourself.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.button
              type="button"
              className={`category-card category-card-${index + 1}`}
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <img src={category.image} alt={`${category.name} fashion collection`} loading="lazy" />
              <span className="category-shade" />
              <span className="category-index">0{index + 1}</span>
              <span className="category-content">
                <span className="category-subtitle">{category.subtitle}</span>
                <span className="category-title">{category.name}</span>
              </span>
              <span className="category-arrow"><ArrowUpRight size={19} /></span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
