
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Shirt,
  Palette,
  CalendarDays,
  RotateCcw,
  WandSparkles,
  ArrowRight,
} from 'lucide-react'
import { outfits } from '../data/outfits'
import OutfitCard from './OutfitCard'

const categories = [
  'Casual',
  'Formal',
  'Party',
  'Streetwear',
  'Traditional',
  'Seasonal',
]

const occasions = [
  'Everyday',
  'Office',
  'Party',
  'Wedding',
  'Date Night',
  'Vacation',
]

const styles = [
  'Minimal',
  'Elegant',
  'Trendy',
  'Classic',
  'Bold',
  'Comfortable',
]

const colors = [
  'Any Color',
  'Black',
  'White',
  'Beige',
  'Blue',
  'Pink',
  'Green',
  'Brown',
]

const clothingTypes = [
  'Any Outfit',
  'Dress',
  'Top and Bottom',
  'Traditional Wear',
  'Jacket',
  'Co-ord Set',
]

const normalize = (value) =>
  String(value ?? '')
    .toLowerCase()
    .replace(/[-_]/g, ' ')
    .trim()

function StylingStudio({
  onViewDetails,
  favorites = [],
  onToggleFavorite,
  selectedCategory,
  onClearCategory,
}) {
  const [category, setCategory] = useState('Casual')
  const [occasion, setOccasion] = useState('Everyday')
  const [style, setStyle] = useState('Minimal')
  const [color, setColor] = useState('Any Color')
  const [clothingType, setClothingType] = useState('Any Outfit')
  const [generated, setGenerated] = useState(false)

  // Sync homepage category selections with this form.
  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory)
      setGenerated(false)
    }
  }, [selectedCategory])

  const matchingOutfits = useMemo(() => {
    if (!generated) return []

    const categoryMatches = outfits.filter((outfit) => {
      const outfitCategory = normalize(outfit.category)
      const selected = normalize(category)

      return (
        !selected ||
        outfitCategory === selected ||
        outfitCategory.includes(selected) ||
        selected.includes(outfitCategory)
      )
    })

    const colorMatches =
      color === 'Any Color'
        ? categoryMatches
        : categoryMatches.filter((outfit) => {
            const searchableText = [
              outfit.title,
              outfit.name,
              outfit.description,
              outfit.color,
              outfit.colors,
              outfit.palette,
              ...(Array.isArray(outfit.items) ? outfit.items : []),
            ]
              .flat()
              .map(normalize)
              .join(' ')

            return searchableText.includes(normalize(color))
          })

    const clothingMatches =
      clothingType === 'Any Outfit'
        ? colorMatches
        : colorMatches.filter((outfit) => {
            const searchableText = [
              outfit.title,
              outfit.name,
              outfit.description,
              outfit.type,
              outfit.clothingType,
              outfit.category,
              ...(Array.isArray(outfit.items) ? outfit.items : []),
            ]
              .flat()
              .map(normalize)
              .join(' ')

            const requested = normalize(clothingType)

            if (requested === 'top and bottom') {
              return (
                searchableText.includes('top') ||
                searchableText.includes('bottom') ||
                searchableText.includes('co ord')
              )
            }

            if (requested === 'traditional wear') {
              return (
                searchableText.includes('traditional') ||
                searchableText.includes('ethnic') ||
                searchableText.includes('saree') ||
                searchableText.includes('kurta')
              )
            }

            return searchableText.includes(requested)
          })

    // Use the selected occasion and style as ranking preferences.
    const preferenceTerms = [
      normalize(occasion),
      normalize(style),
    ].filter(Boolean)

    const ranked = [...clothingMatches].sort((a, b) => {
      const score = (outfit) => {
        const text = [
          outfit.title,
          outfit.name,
          outfit.description,
          outfit.occasion,
          outfit.style,
          outfit.tags,
        ]
          .flat()
          .map(normalize)
          .join(' ')

        return preferenceTerms.reduce(
          (total, term) => total + (text.includes(term) ? 1 : 0),
          0,
        )
      }

      return score(b) - score(a)
    })

    // If no exact color or clothing matches exist, show category results
    // rather than leaving the user with an empty recommendation section.
    return ranked.length
      ? ranked
      : categoryMatches.length
        ? categoryMatches
        : outfits
  }, [generated, category, occasion, style, color, clothingType])

  const generateLook = (event) => {
    event?.preventDefault()
    setGenerated(true)
  }

  const resetForm = () => {
    setCategory(selectedCategory || 'Casual')
    setOccasion('Everyday')
    setStyle('Minimal')
    setColor('Any Color')
    setClothingType('Any Outfit')
    setGenerated(false)

    if (onClearCategory) {
      onClearCategory()
    }
  }

  const isFavorite = (outfit) =>
    favorites.some((favorite) => {
      const favoriteId =
        typeof favorite === 'object' ? favorite.id : favorite

      return favoriteId === outfit.id
    })

  return (
    <section className="studio-section" id="styling-studio">
      <div className="studio-container">
        <motion.div
          className="studio-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">
            <Sparkles size={15} />
            YOUR PERSONAL STYLIST
          </span>

          <h2>
            Your style.
            <br />
            <span>Reimagined.</span>
          </h2>

          <p>
            Tell us what you are looking for. We will help you discover
            outfit inspiration that matches your mood and preferences.
          </p>
        </motion.div>

        <div className="studio-layout">
          <motion.form
            className="studio-form"
            onSubmit={generateLook}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="studio-form-header">
              <div className="studio-form-icon">
                <WandSparkles size={22} />
              </div>

              <div>
                <h3>Build your look</h3>
                <p>Personalize your outfit preferences.</p>
              </div>
            </div>

            <div className="studio-field">
              <label htmlFor="style-category">
                <Shirt size={16} />
                Outfit category
              </label>

              <select
                id="style-category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value)
                  setGenerated(false)
                }}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="studio-field">
              <label htmlFor="style-occasion">
                <CalendarDays size={16} />
                Occasion
              </label>

              <select
                id="style-occasion"
                value={occasion}
                onChange={(event) => {
                  setOccasion(event.target.value)
                  setGenerated(false)
                }}
              >
                {occasions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="studio-field">
              <label htmlFor="style-preference">
                <Sparkles size={16} />
                Style preference
              </label>

              <select
                id="style-preference"
                value={style}
                onChange={(event) => {
                  setStyle(event.target.value)
                  setGenerated(false)
                }}
              >
                {styles.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="studio-field">
              <label htmlFor="style-color">
                <Palette size={16} />
                Preferred color
              </label>

              <select
                id="style-color"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value)
                  setGenerated(false)
                }}
              >
                {colors.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="studio-field">
              <label htmlFor="style-clothing">
                <Shirt size={16} />
                Clothing type
              </label>

              <select
                id="style-clothing"
                value={clothingType}
                onChange={(event) => {
                  setClothingType(event.target.value)
                  setGenerated(false)
                }}
              >
                {clothingTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="studio-form-actions">
              <button className="studio-generate-button" type="submit">
                <Sparkles size={17} />
                Generate New Look
                <ArrowRight size={17} />
              </button>

              <button
                className="studio-reset-button"
                type="button"
                onClick={resetForm}
                aria-label="Reset styling preferences"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

            <p className="studio-form-note">
              <Sparkles size={13} />
              Outfit suggestions are generated from our curated collection.
            </p>
          </motion.form>

          <div className="studio-results">
            {!generated ? (
              <motion.div
                className="studio-empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="studio-empty-icon">
                  <WandSparkles size={36} />
                </div>

                <h3>Your next favorite look awaits.</h3>

                <p>
                  Choose your preferences and generate a look to explore
                  outfit ideas curated for your style.
                </p>

                <div className="studio-preference-summary">
                  <span>{category}</span>
                  <span>{occasion}</span>
                  <span>{style}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="studio-generated-results"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="studio-results-heading">
                  <div>
                    <span className="section-eyebrow">
                      <Sparkles size={14} />
                      YOUR STYLE EDIT
                    </span>

                    <h3>Looks picked for you</h3>

                    <p>
                      {category} · {occasion} · {style}
                    </p>
                  </div>

                  <button
                    className="studio-regenerate-button"
                    type="button"
                    onClick={generateLook}
                  >
                    <RotateCcw size={15} />
                    Generate again
                  </button>
                </div>

                {matchingOutfits.length > 0 ? (
                  <div className="studio-outfit-grid">
                    {matchingOutfits.slice(0, 4).map((outfit, index) => (
                      <OutfitCard
                        key={outfit.id ?? outfit.title ?? index}
                        outfit={outfit}
                        index={index}
                        isFavorite={isFavorite(outfit)}
                        onToggleFavorite={onToggleFavorite}
                        onViewDetails={onViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="studio-no-results">
                    <Shirt size={28} />
                    <h4>No outfits found yet</h4>
                    <p>
                      Try another category or choose Any Color and Any Outfit.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StylingStudio
