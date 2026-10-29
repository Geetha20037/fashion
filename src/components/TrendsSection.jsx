
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const trends = [
  {
    number: '01',
    title: 'Quiet luxury',
    subtitle: 'The art of understated dressing',
    description: 'Elevated basics, beautiful fabrics, and silhouettes that never need to shout.',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=85',
    tag: 'TIMELESS',
  },
  {
    number: '02',
    title: 'Modern romantic',
    subtitle: 'Softness with a point of view',
    description: 'Fluid shapes, delicate color stories, and details that make everyday feel special.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85',
    tag: 'FEMININE',
  },
  {
    number: '03',
    title: 'Street refined',
    subtitle: 'Everyday, with an edge',
    description: 'Relaxed proportions, considered layers, and personal details that do the talking.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85',
    tag: 'CONTEMPORARY',
  },
]

export default function TrendsSection() {
  return (
    <section className="section trends-section" id="trending">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> THE STYLE JOURNAL</span>
            <h2>What's in your <em>fashion orbit?</em></h2>
          </div>
          <p className="section-side-copy">
            Inspiration, not rules. Explore the aesthetics we're loving and
            make every trend your own.
          </p>
        </div>

        <div className="trends-grid">
          {trends.map((trend, index) => (
            <motion.article
              className="trend-card"
              key={trend.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="trend-image-wrap">
                <img src={trend.image} alt={trend.title} loading="lazy" />
                <span className="trend-tag">{trend.tag}</span>
                <span className="trend-number">{trend.number}</span>
              </div>
              <div className="trend-copy">
                <span className="trend-subtitle">{trend.subtitle}</span>
                <h3>{trend.title}</h3>
                <p>{trend.description}</p>
                <a href="#styling-studio" className="trend-link">
                  Make it yours <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

