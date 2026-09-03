export const products = [
  {
    id: 'p1',
    slug: 'linen-blend-blazer',
    name: 'Linen Blend Blazer',
    category: 'clothing',
    subCategory: 'tops',
    price: 89.00,
    comparePrice: 119.00,
    rating: 4.9,
    reviewCount: 148,
    isNew: true,
    isFeatured: true,
    inStock: true,
    badge: 'NEW SEASON',
    colors: [
      { name: 'Oatmeal Beige', hex: '#D6C8B4', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80' },
      { name: 'Warm Taupe', hex: '#9E8B76', image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=900&q=80' },
      { name: 'Midnight Charcoal', hex: '#262927', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'An architectural single-breasted blazer woven from a premium European linen and viscose blend. Designed with softly padded shoulders, tortoiseshell buttons, and a clean relaxed silhouette that effortlessly elevates both denim and tailored trousers.',
    details: [
      '70% European Linen, 30% Lyocell',
      'Notched lapels with front flap pockets',
      'Double back vent for ease of motion',
      'Dry clean recommended or gentle cold hand wash',
      'Model is 5\'9" (175cm) wearing size S'
    ]
  },
  {
    id: 'p2',
    slug: 'floral-ruffle-dress',
    name: 'Floral Ruffle Dress',
    category: 'dresses',
    subCategory: 'dresses',
    price: 69.00,
    comparePrice: null,
    rating: 4.8,
    reviewCount: 92,
    isNew: true,
    isFeatured: true,
    inStock: true,
    badge: 'BESTSELLER',
    colors: [
      { name: 'Blush Floral', hex: '#F0D5D1', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80' },
      { name: 'Ivory Meadow', hex: '#EBE5D8', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80' },
      { name: 'Sage Blossom', hex: '#B8C2B3', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A romantic midi dress featuring delicate hand-drawn botanicals on airy chiffon. Cut with a flattering V-neckline, cascading tier ruffles, and an adjustable cinched waist tie that moves gracefully with every step.',
    details: [
      '100% Recycled Chiffon with soft modal lining',
      'Delicate micro-pleating and ruffled trim',
      'Concealed side seam zipper closure',
      'Cold delicate cycle, hang dry in shade',
      'Model is 5\'10" (178cm) wearing size S'
    ]
  },
  {
    id: 'p3',
    slug: 'satin-slip-dress',
    name: 'Satin Slip Dress',
    category: 'dresses',
    subCategory: 'dresses',
    price: 74.00,
    comparePrice: 98.00,
    rating: 5.0,
    reviewCount: 215,
    isNew: true,
    isFeatured: true,
    inStock: true,
    badge: 'MUST HAVE',
    colors: [
      { name: 'Champagne Gold', hex: '#E2D1B3', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80' },
      { name: 'Terracotta Rust', hex: '#C2765A', image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80' },
      { name: 'Olive Luster', hex: '#586049', image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'The epitome of 90s minimalism re-imagined. Cut on the bias from heavyweight liquid satin, this slip dress drapes fluidly along the contours of your silhouette with adjustable spaghetti straps and a subtle side slit.',
    details: [
      'Heavyweight 92% Silk Satin, 8% Elastane',
      'Bias cut for natural stretch and fluid drape',
      'Deep cowl neckline with French seams',
      'Dry clean only',
      'Model is 5\'8" (173cm) wearing size S'
    ]
  },
  {
    id: 'p4',
    slug: 'oversized-shirt',
    name: 'Oversized Shirt',
    category: 'tops',
    subCategory: 'tops',
    price: 49.00,
    comparePrice: null,
    rating: 4.7,
    reviewCount: 84,
    isNew: true,
    isFeatured: true,
    inStock: true,
    badge: 'ESSENTIAL',
    colors: [
      { name: 'Crisp Porcelain', hex: '#F9F8F5', image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&w=900&q=80' },
      { name: 'Muted Khaki', hex: '#A89E88', image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Sage Moss', hex: '#636F5C', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A timeless staple crafted from crisp organic poplin cotton. Tailored with dropped shoulders, exaggerated cuffs, and a curved high-low hem that lends a modern boyfriend aesthetic to everyday outfitting.',
    details: [
      '100% Organic GOTS Certified Poplin Cotton',
      'Mother-of-pearl buttons',
      'Back box pleat for effortless volume',
      'Machine wash gentle warm, warm iron',
      'Model is 5\'9" (176cm) wearing size S'
    ]
  },
  {
    id: 'p5',
    slug: 'wide-leg-trousers',
    name: 'Wide Leg Trousers',
    category: 'bottoms',
    subCategory: 'bottoms',
    price: 59.00,
    comparePrice: 79.00,
    rating: 4.9,
    reviewCount: 167,
    isNew: true,
    isFeatured: true,
    inStock: true,
    badge: 'TRENDING',
    colors: [
      { name: 'Warm Cream', hex: '#EAE4D6', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' },
      { name: 'Desert Camel', hex: '#B59473', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80' },
      { name: 'Onyx Black', hex: '#21201E', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'High-waisted wide-leg trousers designed with deep front pleats, slant pockets, and a fluid drape. Engineered to visually elongate the leg and bring sophisticated polish from desk to dinner.',
    details: [
      '65% Polyester, 32% Rayon, 3% Spandex',
      'High rise with tailored waistband and belt loops',
      'Concealed hook-and-bar zip fastening',
      'Machine wash gentle cold or dry clean',
      'Model is 5\'11" (180cm) wearing size S'
    ]
  },
  {
    id: 'p6',
    slug: 'quilted-chain-bag',
    name: 'Quilted Chain Bag',
    category: 'accessories',
    subCategory: 'accessories',
    price: 79.00,
    comparePrice: 110.00,
    rating: 5.0,
    reviewCount: 312,
    isNew: true,
    isFeatured: true,
    inStock: true,
    badge: 'ICONIC',
    colors: [
      { name: 'Cream Leather', hex: '#F0EBE0', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80' },
      { name: 'Cognac Brown', hex: '#824823', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80' },
      { name: 'Midnight Jet', hex: '#1C1B19', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['One Size'],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'An enduring icon of feminine luxury. Expertly crafted in supple diamond-quilted calf leather, finished with a brushed gold-toned chain strap that can be worn crossbody or doubled on the shoulder.',
    details: [
      '100% Full-grain Napa Calfskin Leather',
      'Signature turn-lock closure with interior zip partition',
      'Brushed Champagne Gold hardware',
      'Comes with protective organic cotton dust bag',
      'Dimensions: 26cm W x 16cm H x 8cm D'
    ]
  },
  {
    id: 'p7',
    slug: 'co-ord-linen-vest-set',
    name: 'Co-ord Linen Vest Set',
    category: 'co-ords',
    subCategory: 'co-ords',
    price: 119.00,
    comparePrice: 149.00,
    rating: 4.9,
    reviewCount: 78,
    isNew: true,
    isFeatured: false,
    inStock: true,
    badge: 'SET DEAL',
    colors: [
      { name: 'Olive Green', hex: '#4A5543', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Natural Sand', hex: '#D8CEBF', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'The definitive tailoring set for warm weather. Includes an asymmetric buttoned waistcoat paired with matching relaxed pleated trousers in our signature washed linen.',
    details: [
      '100% French Flax Linen',
      'Two-piece matching ensemble',
      'Vest has adjustable back buckle cinch',
      'Dry clean recommended',
      'Model is 5\'10" wearing size S'
    ]
  },
  {
    id: 'p8',
    slug: 'sculptural-pearl-earrings',
    name: 'Sculptural Pearl Drop Earrings',
    category: 'accessories',
    subCategory: 'accessories',
    price: 38.00,
    comparePrice: null,
    rating: 4.9,
    reviewCount: 120,
    isNew: false,
    isFeatured: false,
    inStock: true,
    badge: 'HANDCRAFTED',
    colors: [
      { name: 'Gold & Baroque Pearl', hex: '#D4AF37', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['One Size'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Organic freeform molten gold hoops suspending genuine freshwater baroque pearls. Each piece is entirely unique, embodying artful elegance.',
    details: [
      '18k Gold Vermeil over 925 Sterling Silver',
      'Natural AAA Grade Freshwater Baroque Pearls',
      'Hypoallergenic & nickel-free',
      'Drop length: 4.2cm'
    ]
  },
  {
    id: 'p9',
    slug: 'silk-halter-top',
    name: 'Silk Halter Neck Top',
    category: 'tops',
    subCategory: 'tops',
    price: 55.00,
    comparePrice: 70.00,
    rating: 4.8,
    reviewCount: 65,
    isNew: true,
    isFeatured: false,
    inStock: true,
    badge: null,
    colors: [
      { name: 'Ivory Silk', hex: '#F6F3EB', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80' },
      { name: 'Emerald Forest', hex: '#274435', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'An alluring high-neck halter top with delicate gathered collar and open back ribbon tie in pure mulberry silk.',
    details: [
      '100% 19mm Mulberry Silk',
      'High gathered halter neck with neck ribbon closure',
      'Dry clean or cold hand wash'
    ]
  },
  {
    id: 'p10',
    slug: 'tailored-trench-coat',
    name: 'Tailored Wool Trench Coat',
    category: 'clothing',
    subCategory: 'tops',
    price: 189.00,
    comparePrice: 249.00,
    rating: 5.0,
    reviewCount: 94,
    isNew: false,
    isFeatured: false,
    inStock: true,
    badge: 'PREMIUM',
    colors: [
      { name: 'Honey Sand', hex: '#CDB194', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80' },
      { name: 'Deep Olive', hex: '#374134', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A double-breasted longline trench constructed with Italian virgin wool. Features epaulettes, storm flaps, and a structured buckle belt for a commanding silhouette.',
    details: [
      '80% Virgin Wool, 20% Cashmere',
      'Horn buttons and leather-wrapped buckles',
      'Fully lined with viscose jacquard'
    ]
  },
  {
    id: 'p11',
    slug: 'pleated-palazzo-pants',
    name: 'Pleated Palazzo Pants',
    category: 'bottoms',
    subCategory: 'bottoms',
    price: 65.00,
    comparePrice: 85.00,
    rating: 4.7,
    reviewCount: 51,
    isNew: false,
    isFeatured: false,
    inStock: true,
    badge: null,
    colors: [
      { name: 'Muted Sage', hex: '#879580', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Vanilla Cream', hex: '#F4ECE0', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Flowing accordion pleats create theatrical movement in these ultra-comfortable wide palazzo trousers.',
    details: [
      '100% Plissé Crepe',
      'Elasticized comfort waist with hidden drawstring',
      'Floor grazing length'
    ]
  },
  {
    id: 'p12',
    slug: 'ribbed-knit-midi-dress',
    name: 'Ribbed Knit Midi Dress',
    category: 'dresses',
    subCategory: 'dresses',
    price: 82.00,
    comparePrice: 105.00,
    rating: 4.9,
    reviewCount: 110,
    isNew: true,
    isFeatured: false,
    inStock: true,
    badge: 'NEW',
    colors: [
      { name: 'Espresso Brown', hex: '#3E3127', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80' },
      { name: 'Ivory Sand', hex: '#EAE1D2', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Body-skimming ribbed knit midi sculpted from fine spun merino wool blend. Features a sweetheart neckline and fluted hem.',
    details: [
      '60% Extra Fine Merino Wool, 40% Organic Cotton',
      'Sweetheart collar and side slit',
      'Dry clean or hand wash flat'
    ]
  }
];
