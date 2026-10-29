
export const categories = [
  {
    name: 'Casual',
    subtitle: 'Effortlessly everyday',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Formal',
    subtitle: 'Powerfully polished',
    image:
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Party',
    subtitle: 'Make an entrance',
    image:
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Streetwear',
    subtitle: 'Own your edge',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Traditional',
    subtitle: 'Heritage, reimagined',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Seasonal',
    subtitle: 'Dress for the moment',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85',
  },
]

export const outfits = [
  {
    id: 1,
    name: 'The Quiet Luxury Edit',
    category: 'Formal',
    style: 'Minimal',
    occasion: 'Work',
    color: 'Beige',
    clothing: 'Blazer',
    season: 'All season',
    description:
      'Refined tailoring meets understated luxury in a timeless neutral palette.',
    image:
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=85',
    items: ['Cream tailored blazer', 'Ivory fitted top', 'Beige straight-leg trousers'],
    accessories: ['Structured tan handbag', 'Gold hoop earrings', 'Pointed-toe loafers'],
    palette: ['#e9d9c6', '#c2a68b', '#6b5140', '#f7f0e7'],
    tip: 'Keep your silhouette clean and choose one structured accessory to finish the look.',
    match: 98,
    tags: ['Timeless', 'Office-ready', 'Minimal'],
  },
  {
    id: 2,
    name: 'Golden Hour Muse',
    category: 'Party',
    style: 'Chic',
    occasion: 'Date Night',
    color: 'Black',
    clothing: 'Dress',
    season: 'All season',
    description:
      'A sleek evening silhouette with delicate accessories and a confident finish.',
    image:
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85',
    items: ['Black evening dress', 'Minimal strappy heels', 'Tailored evening jacket'],
    accessories: ['Small metallic clutch', 'Statement earrings', 'Fine layered necklace'],
    palette: ['#171717', '#bda18a', '#d7c4ac', '#f1e8dc'],
    tip: 'Let one statement accessory shine. Keep the rest of your jewelry delicate.',
    match: 96,
    tags: ['Evening', 'Elegant', 'Statement'],
  },
  {
    id: 3,
    name: 'Off-Duty Icon',
    category: 'Streetwear',
    style: 'Streetwear',
    occasion: 'Weekend',
    color: 'White',
    clothing: 'Jeans',
    season: 'Spring',
    description:
      'Relaxed denim and clean layers create an easy look with modern street-style energy.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    items: ['Relaxed white tee', 'Straight-leg blue denim', 'Oversized lightweight jacket'],
    accessories: ['White sneakers', 'Crossbody bag', 'Minimal sunglasses'],
    palette: ['#f6f3ed', '#b6c6d6', '#34495e', '#b5a08a'],
    tip: 'Balance oversized layers with a clean trouser silhouette for a considered look.',
    match: 94,
    tags: ['Relaxed', 'Everyday', 'Urban'],
  },
  {
    id: 4,
    name: 'Soft Morning Poetry',
    category: 'Casual',
    style: 'Minimal',
    occasion: 'Brunch',
    color: 'White',
    clothing: 'Top',
    season: 'Spring',
    description:
      'Soft textures and relaxed shapes bring an easy, romantic feel to daytime dressing.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
    items: ['White linen shirt', 'Cream relaxed trousers', 'Lightweight knit layer'],
    accessories: ['Canvas tote', 'Simple gold chain', 'Neutral flat sandals'],
    palette: ['#f7f1e7', '#d8c8b3', '#9eaa91', '#b79a82'],
    tip: 'Mix linen and cotton for texture. A half-tuck keeps the silhouette relaxed but polished.',
    match: 97,
    tags: ['Airy', 'Comfortable', 'Easy chic'],
  },
  {
    id: 5,
    name: 'Modern Maharani',
    category: 'Traditional',
    style: 'Chic',
    occasion: 'Wedding',
    color: 'Pink',
    clothing: 'Dress',
    season: 'Festive',
    description:
      'A celebration-ready ethnic-inspired look balanced with graceful modern details.',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
    items: ['Rose-toned traditional ensemble', 'Coordinated dupatta', 'Elegant embellished footwear'],
    accessories: ['Gold jhumka earrings', 'Delicate bangles', 'Small embroidered clutch'],
    palette: ['#d9a4aa', '#8d4d55', '#d9b875', '#f6e8d6'],
    tip: 'Coordinate your jewelry with the outfit detailing rather than introducing too many new colors.',
    match: 95,
    tags: ['Festive', 'Graceful', 'Celebration'],
  },
  {
    id: 6,
    name: 'City in Motion',
    category: 'Casual',
    style: 'Streetwear',
    occasion: 'Weekend',
    color: 'Blue',
    clothing: 'Jeans',
    season: 'Autumn',
    description:
      'Everyday denim, versatile layers, and practical accessories for a day on the move.',
    image:
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85',
    items: ['Blue straight-leg jeans', 'Neutral fitted tee', 'Lightweight trench coat'],
    accessories: ['Everyday sneakers', 'Shoulder bag', 'Classic watch'],
    palette: ['#52677b', '#d5c2ad', '#ece5dc', '#55463b'],
    tip: 'Use a neutral outer layer to tie together denim and lighter basics.',
    match: 92,
    tags: ['Versatile', 'Layered', 'City-ready'],
  },
  {
    id: 7,
    name: 'After Dark',
    category: 'Party',
    style: 'Bold',
    occasion: 'Party',
    color: 'Red',
    clothing: 'Dress',
    season: 'All season',
    description:
      'Confident color and sleek accessories for nights when your outfit does the talking.',
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85',
    items: ['Statement red dress', 'Minimal heels', 'Light evening wrap'],
    accessories: ['Black mini bag', 'Sculptural earrings', 'Slim bracelet'],
    palette: ['#a72c38', '#1e1c1c', '#c2a18a', '#f1e5d8'],
    tip: 'Pair a strong color with restrained accessories so the outfit remains the focus.',
    match: 93,
    tags: ['Bold', 'Night out', 'Confident'],
  },
  {
    id: 8,
    name: 'The Creative Uniform',
    category: 'Formal',
    style: 'Minimal',
    occasion: 'Work',
    color: 'Black',
    clothing: 'Blazer',
    season: 'Autumn',
    description:
      'Modern monochrome separates offer a versatile uniform for creative workdays.',
    image:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85',
    items: ['Black relaxed blazer', 'Soft neutral inner layer', 'Tailored black trousers'],
    accessories: ['Leather shoulder bag', 'Loafers', 'Minimal watch'],
    palette: ['#202020', '#47413c', '#c7b5a3', '#f1e9de'],
    tip: 'Combine different textures within one color family to keep monochrome outfits interesting.',
    match: 96,
    tags: ['Monochrome', 'Workwear', 'Modern'],
  },
  {
    id: 9,
    name: 'Weekend in Bloom',
    category: 'Seasonal',
    style: 'Chic',
    occasion: 'Brunch',
    color: 'Pink',
    clothing: 'Dress',
    season: 'Spring',
    description:
      'Light layers, a soft palette, and feminine shapes for sunny weekend plans.',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85',
    items: ['Soft pink day dress', 'Light cardigan', 'Comfortable flats'],
    accessories: ['Woven handbag', 'Small hoop earrings', 'Sunglasses'],
    palette: ['#e4b5bc', '#f4eadf', '#b8c4a9', '#aa8a72'],
    tip: 'Repeat one color in a small accessory to make the palette feel intentional.',
    match: 94,
    tags: ['Spring', 'Soft color', 'Daytime'],
  },
  {
    id: 10,
    name: 'Winter in Neutrals',
    category: 'Seasonal',
    style: 'Minimal',
    occasion: 'Weekend',
    color: 'Beige',
    clothing: 'Blazer',
    season: 'Winter',
    description:
      'Tonal layers and cozy textures bring sophistication to cooler-weather dressing.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    items: ['Camel long coat', 'Cream knit sweater', 'Neutral tailored trousers'],
    accessories: ['Leather ankle boots', 'Structured handbag', 'Wool scarf'],
    palette: ['#c4a484', '#eee3d4', '#8c6b51', '#39322d'],
    tip: 'Layer similar neutrals in different textures for depth without visual clutter.',
    match: 97,
    tags: ['Layering', 'Cozy', 'Timeless'],
  },
  {
    id: 11,
    name: 'Denim After Hours',
    category: 'Streetwear',
    style: 'Bold',
    occasion: 'Weekend',
    color: 'Blue',
    clothing: 'Jeans',
    season: 'All season',
    description:
      'A sharper take on denim with confident proportions and low-effort accessories.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    items: ['Dark straight-leg jeans', 'Fitted black top', 'Oversized denim jacket'],
    accessories: ['Chunky sneakers', 'Crossbody bag', 'Dark sunglasses'],
    palette: ['#253d55', '#191919', '#a8b3bf', '#e7ded2'],
    tip: 'Combine light and dark denim carefully and keep the accessories in a consistent palette.',
    match: 91,
    tags: ['Denim', 'Urban', 'Bold'],
  },
  {
    id: 12,
    name: 'Elegant Everyday',
    category: 'Traditional',
    style: 'Minimal',
    occasion: 'Family Gathering',
    color: 'Green',
    clothing: 'Dress',
    season: 'Festive',
    description:
      'A refined traditional-inspired outfit with soft accessories and rich, earthy tones.',
    image:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e4?auto=format&fit=crop&w=900&q=85',
    items: ['Sage green ethnic outfit', 'Coordinated dupatta', 'Neutral traditional footwear'],
    accessories: ['Antique gold earrings', 'Simple bangles', 'Small potli bag'],
    palette: ['#82917a', '#d7c7a6', '#6c5746', '#f2e9dc'],
    tip: 'Earthy green pairs beautifully with antique gold and warm neutral accessories.',
    match: 95,
    tags: ['Traditional', 'Earthy', 'Elegant'],
  },
]

export const occasions = [
  'Any Occasion',
  'Work',
  'Date Night',
  'Weekend',
  'Brunch',
  'Party',
  'Wedding',
  'Family Gathering',
]

export const styles = [
  'Any Style',
  'Minimal',
  'Chic',
  'Bold',
  'Streetwear',
]

export const colors = [
  'Any Color',
  'Beige',
  'Black',
  'White',
  'Pink',
  'Blue',
  'Red',
  'Green',
]

export const clothingTypes = [
  'Any Clothing',
  'Blazer',
  'Dress',
  'Jeans',
  'Top',
]
