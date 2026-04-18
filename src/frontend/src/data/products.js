// QuickCart — Product Data
// Images use verified Unsplash photo IDs — stable, product-specific, non-repeating

const svgPlaceholder = (label) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(label)}%3C/text%3E%3C/svg%3E`;

export { svgPlaceholder };

// Unsplash format: https://images.unsplash.com/photo-{ID}?w=400&h=400&fit=crop&auto=format
// Every product has a unique photo ID or unique sig — no two products share the same URL

export const categories = [
  {
    id: "all",
    name: "All",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "dairy",
    name: "Dairy & Breakfast",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "snacks",
    name: "Snacks & Munchies",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "beverages",
    name: "Beverages",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "fruits",
    name: "Fresh Fruits",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop&auto=format&sig=fruits",
  },
  {
    id: "laundry",
    name: "Laundry Care",
    image:
      "https://images.unsplash.com/photo-1585566240508-27df3e63e3ed?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "cleaning",
    name: "Household Cleaning",
    image:
      "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    image:
      "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: "rice-dal",
    name: "Rice, Dal & Pulses",
    image:
      "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&h=300&fit=crop&auto=format",
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "Fresh Fruits",
    subtitle: "Farm-fresh fruits delivered in minutes",
    badge: "Up to 30% off",
    highlight: "fruits",
    theme: { bg: "from-green-600 to-emerald-500", accent: "#10b981" },
  },
  {
    id: 2,
    title: "Dairy Essentials",
    subtitle: "Milk, paneer, butter & more — always fresh",
    badge: "Daily Staples",
    highlight: "dairy",
    theme: { bg: "from-blue-600 to-sky-500", accent: "#0ea5e9" },
  },
  {
    id: 3,
    title: "Snacks & Treats",
    subtitle: "Your favourite munchies at best prices",
    badge: "New Arrivals",
    highlight: "snacks",
    theme: { bg: "from-orange-600 to-amber-500", accent: "#f59e0b" },
  },
  {
    id: 4,
    title: "Cool Beverages",
    subtitle: "Juices, energy drinks, tea & coffee",
    badge: "Thirst Quenchers",
    highlight: "beverages",
    theme: { bg: "from-purple-700 to-violet-500", accent: "#8b5cf6" },
  },
  {
    id: 5,
    title: "Household Essentials",
    subtitle: "Cleaning, laundry & home care in 10 min",
    badge: "Stock Up & Save",
    highlight: "cleaning",
    theme: { bg: "from-rose-600 to-pink-500", accent: "#ec4899" },
  },
];

export const products = [
  // ─── DAIRY (14 products) ────────────────────────────────────────────────────
  {
    id: "amul-taaza-toned-milk-1l",
    name: "Amul Taaza Toned Fresh Milk",
    brand: "Amul",
    category: "dairy",
    price: 57,
    originalPrice: 65,
    discount: "12% off",
    weight: "1 L",
    // Pouring milk — matches "Amul Taaza Toned Fresh Milk"
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Taaza Toned Milk is pasteurised and homogenised for consistent quality. With 3% fat content, ideal for drinking, cooking, and making dairy products.",
    rating: 4.5,
    reviewCount: 18200,
    inStock: true,
  },
  {
    id: "mother-dairy-toned-500ml",
    name: "Mother Dairy Toned Milk Fresh",
    brand: "Mother Dairy",
    category: "dairy",
    price: 28,
    originalPrice: 33,
    discount: "15% off",
    weight: "500 ml",
    // Glass of white milk being poured
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop&auto=format",
    description:
      "Mother Dairy Toned Milk is sourced from local dairy farmers and processed to ensure freshness and quality. Nutritious and delicious for the whole family.",
    rating: 4.4,
    reviewCount: 10320,
    inStock: true,
  },
  {
    id: "amul-gold-full-cream-1l",
    name: "Amul Gold Full Cream Milk",
    brand: "Amul",
    category: "dairy",
    price: 66,
    originalPrice: 75,
    discount: "12% off",
    weight: "1 L",
    // Milk pouring into glass
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Gold Full Cream Milk contains 6% fat for a rich, creamy taste. Perfect for making thick kheer, coffee, and full-flavoured dairy-based desserts.",
    rating: 4.6,
    reviewCount: 12400,
    inStock: true,
  },
  {
    id: "amul-butter-500g",
    name: "Amul Pasteurised Butter",
    brand: "Amul",
    category: "dairy",
    price: 249,
    originalPrice: 285,
    discount: "13% off",
    weight: "500 g",
    // Yellow butter block
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Pasteurised Butter is made from fresh cream for a rich, creamy flavour. Perfect for spreading, cooking, baking, and adding richness to your favourite dishes.",
    rating: 4.7,
    reviewCount: 24100,
    inStock: true,
  },
  {
    id: "amul-paneer-200g",
    name: "Amul Fresh Paneer",
    brand: "Amul",
    category: "dairy",
    price: 89,
    originalPrice: 105,
    discount: "15% off",
    weight: "200 g",
    // White paneer/cottage cheese cubes
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Fresh Paneer is made from fresh cow milk for a soft, spongy texture. Rich in protein and calcium, the cornerstone ingredient in countless beloved Indian dishes.",
    rating: 4.5,
    reviewCount: 11200,
    inStock: true,
  },
  {
    id: "britannia-cheese-slices-200g",
    name: "Britannia Cheese Slices Premium",
    brand: "Britannia",
    category: "dairy",
    price: 159,
    originalPrice: 190,
    discount: "16% off",
    weight: "200 g (12 slices)",
    // Yellow cheese slices
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop&auto=format",
    description:
      "Britannia Cheese Slices are made from processed cow milk cheese for consistent quality and taste. Perfectly portioned slices that melt beautifully for sandwiches and burgers.",
    rating: 4.5,
    reviewCount: 8720,
    inStock: true,
  },
  {
    id: "mother-dairy-curd-400g",
    name: "Mother Dairy Full Cream Fresh Curd",
    brand: "Mother Dairy",
    category: "dairy",
    price: 45,
    originalPrice: 52,
    discount: "13% off",
    weight: "400 g",
    // White creamy yogurt/curd in a bowl
    image:
      "https://images.unsplash.com/photo-1571211905829-cfb03aa374e3?w=400&h=400&fit=crop&auto=format",
    description:
      "Mother Dairy Full Cream Curd is made from fresh pasteurised full cream milk. Thick and creamy with a mildly tangy taste, perfect for raita, lassi, or eating plain.",
    rating: 4.4,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "amul-greek-yogurt-400g",
    name: "Amul Greek Yogurt High Protein",
    brand: "Amul",
    category: "dairy",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "400 g",
    // Greek yogurt bowl
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Greek Yogurt is strained to give a thick, creamy texture with higher protein content. Made from whole milk, it's a nutritious option for a healthy, filling snack.",
    rating: 4.4,
    reviewCount: 4320,
    inStock: true,
  },
  {
    id: "britannia-ghee-500ml",
    name: "Britannia Milkman Pure Ghee",
    brand: "Britannia",
    category: "dairy",
    price: 345,
    originalPrice: 399,
    discount: "14% off",
    weight: "500 ml",
    // Golden clarified ghee jar
    image:
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=400&fit=crop&auto=format",
    description:
      "Britannia Milkman Pure Ghee is made from fresh cream using a traditional slow-cooking method. Rich aroma and golden colour with authentic desi ghee taste.",
    rating: 4.5,
    reviewCount: 5640,
    inStock: true,
  },
  {
    id: "kwality-cornetto-120ml",
    name: "Kwality Wall's Cornetto Choco Brownie",
    brand: "Kwality Wall's",
    category: "dairy",
    price: 55,
    originalPrice: 65,
    discount: "15% off",
    weight: "120 ml",
    // Chocolate ice cream cone
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=400&fit=crop&auto=format",
    description:
      "Kwality Wall's Cornetto Choco Brownie is a cone ice cream with chocolate sauce, brownie pieces, and almonds. A complete indulgent dessert experience in every bite.",
    rating: 4.6,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "amul-ice-cream-vanilla-500ml",
    name: "Amul Real Ice Cream Vanilla",
    brand: "Amul",
    category: "dairy",
    price: 149,
    originalPrice: 175,
    discount: "15% off",
    weight: "500 ml",
    // Vanilla ice cream scoops
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Real Ice Cream Vanilla is made with real milk and Bourbon vanilla beans for a rich, creamy, authentic flavour. A classic dessert loved by the whole family.",
    rating: 4.5,
    reviewCount: 8720,
    inStock: true,
  },
  {
    id: "nestle-milkmaid-400g",
    name: "Nestlé MILKMAID Sweetened Condensed Milk",
    brand: "Nestlé",
    category: "dairy",
    price: 99,
    originalPrice: 120,
    discount: "18% off",
    weight: "400 g",
    // Condensed milk / sweet cream
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=400&fit=crop&auto=format",
    description:
      "Nestlé MILKMAID Sweetened Condensed Milk is made with whole milk and sugar for a thick, creamy sweetness. The ultimate ingredient for desserts, sweets, and baking.",
    rating: 4.6,
    reviewCount: 5640,
    inStock: true,
  },
  {
    id: "amul-mast-dahi-400g",
    name: "Amul Mast Dahi Fresh Curd",
    brand: "Amul",
    category: "dairy",
    price: 35,
    originalPrice: 42,
    discount: "17% off",
    weight: "400 g",
    // Creamy white curd/dahi in container
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Mast Dahi is thick, creamy, and freshly made from pasteurised milk with live cultures. The perfect accompaniment to any meal or the base for lassi and raita.",
    rating: 4.4,
    reviewCount: 7650,
    inStock: true,
  },
  {
    id: "amul-taaza-uht-1l",
    name: "Amul Taaza UHT Toned Milk Tetra",
    brand: "Amul",
    category: "dairy",
    price: 65,
    originalPrice: 75,
    discount: "13% off",
    weight: "1 L",
    // Milk tetra pack / carton
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=400&fit=crop&auto=format",
    description:
      "Amul Taaza UHT Toned Milk in Tetra Pak has a 180-day shelf life without refrigeration until opened. Convenient and nutritious for travel and pantry stocking.",
    rating: 4.4,
    reviewCount: 9870,
    inStock: true,
  },

  // ─── SNACKS (15 products) ───────────────────────────────────────────────────
  {
    id: "lays-classic-salted-52g",
    name: "Lay's Classic Salted Potato Chips",
    brand: "Lay's",
    category: "snacks",
    price: 20,
    originalPrice: 25,
    discount: "20% off",
    weight: "52 g",
    // Potato chips/crisps closeup
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop&auto=format",
    description:
      "Lay's Classic Salted Potato Chips are wafer-thin and perfectly salted for the ultimate snacking experience. Made from farm-fresh potatoes for authentic taste in every bite.",
    rating: 4.4,
    reviewCount: 23100,
    inStock: true,
  },
  {
    id: "kurkure-masala-73g",
    name: "Kurkure Masala Munch Crisps",
    brand: "Kurkure",
    category: "snacks",
    price: 30,
    originalPrice: 35,
    discount: "14% off",
    weight: "73 g",
    // Crunchy corn puffs/crisps
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop&auto=format",
    description:
      "Kurkure Masala Munch is an irresistible crunchy snack made from rice, corn, and gram flour. Its unique twisted shape is flavoured with real spices for the perfect masala kick.",
    rating: 4.3,
    reviewCount: 15420,
    inStock: true,
  },
  {
    id: "doritos-nacho-100g",
    name: "Doritos Nacho Cheese Tortilla Chips",
    brand: "Doritos",
    category: "snacks",
    price: 99,
    originalPrice: 125,
    discount: "21% off",
    weight: "100 g",
    // Tortilla/nacho chips
    image:
      "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=400&h=400&fit=crop&auto=format",
    description:
      "Doritos Nacho Cheese Tortilla Chips are boldly flavoured corn chips coated in real cheese seasoning. Triangular, crunchy, and irresistible — perfect for dipping.",
    rating: 4.4,
    reviewCount: 4320,
    inStock: true,
  },
  {
    id: "pringles-original-134g",
    name: "Pringles Original Flavour Chips",
    brand: "Pringles",
    category: "snacks",
    price: 199,
    originalPrice: 249,
    discount: "20% off",
    weight: "134 g",
    // Stacked round crisps in tube
    image:
      "https://images.unsplash.com/photo-1518414879329-5a30e53f34dc?w=400&h=400&fit=crop&auto=format",
    description:
      "Pringles Original Flavour Chips are uniformly shaped, perfectly seasoned potato crisps stacked in the iconic tube. Each crisp delivers the same satisfying crunch.",
    rating: 4.5,
    reviewCount: 7630,
    inStock: true,
  },
  {
    id: "haldirams-bhujia-200g",
    name: "Haldiram's Bhujia Sev Spicy",
    brand: "Haldiram's",
    category: "snacks",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "200 g",
    // Indian sev/bhujia namkeen snack
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&h=400&fit=crop&auto=format",
    description:
      "Haldiram's Bhujia Sev is a spicy, crunchy Indian snack made with moth bean flour and spices. A classic tea-time favourite enjoyed across India for generations.",
    rating: 4.5,
    reviewCount: 14200,
    inStock: true,
  },
  {
    id: "haldirams-aloo-bhujia-200g",
    name: "Haldiram's Aloo Bhujia Sev",
    brand: "Haldiram's",
    category: "snacks",
    price: 79,
    originalPrice: 99,
    discount: "20% off",
    weight: "200 g",
    // Crispy fried Indian namkeen bhujia
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=400&fit=crop&auto=format",
    description:
      "Haldiram's Aloo Bhujia Sev is a classic Indian namkeen made with potatoes and chickpea flour. Its signature blend of spices makes it the perfect tea-time companion.",
    rating: 4.5,
    reviewCount: 12300,
    inStock: true,
  },
  {
    id: "maggi-noodles-420g",
    name: "Maggi 2-Minute Masala Noodles",
    brand: "Maggi",
    category: "snacks",
    price: 60,
    originalPrice: 75,
    discount: "20% off",
    weight: "420 g (6 packs)",
    // Instant noodles cooked in bowl
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop&auto=format",
    description:
      "Maggi 2-Minute Masala Noodles are the quick and delicious snack loved by millions. Made with real vegetables and authentic spices, ready in just 2 minutes.",
    rating: 4.6,
    reviewCount: 38900,
    inStock: true,
  },
  {
    id: "oreo-original-300g",
    name: "Oreo Chocolate Sandwich Biscuits",
    brand: "Oreo",
    category: "snacks",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "300 g",
    // Black and white sandwich cookies
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop&auto=format",
    description:
      "Oreo Chocolate Sandwich Biscuits feature two crispy chocolate wafers with a sweet cream filling. Enjoy by dunking in milk or twisting apart for the iconic Oreo experience.",
    rating: 4.6,
    reviewCount: 18900,
    inStock: true,
  },
  {
    id: "parle-g-original-799g",
    name: "Parle-G Original Glucose Biscuits",
    brand: "Parle",
    category: "snacks",
    price: 50,
    originalPrice: 62,
    discount: "19% off",
    weight: "799 g",
    // Plain glucose biscuits/cookies stacked
    image:
      "https://images.unsplash.com/photo-1534432182912-63863115e106?w=400&h=400&fit=crop&auto=format",
    description:
      "Parle-G Original Glucose Biscuits are an iconic Indian treat enjoyed for generations. Made with wheat flour, sugar, and milk solids for a wholesome, delicious snack.",
    rating: 4.7,
    reviewCount: 45300,
    inStock: true,
  },
  {
    id: "dairy-milk-silk-150g",
    name: "Cadbury Dairy Milk Silk Chocolate",
    brand: "Cadbury",
    category: "snacks",
    price: 199,
    originalPrice: 245,
    discount: "19% off",
    weight: "162 g",
    // Milk chocolate bar
    image:
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop&auto=format",
    description:
      "Cadbury Dairy Milk Silk is extra smooth with a silkier texture than regular Dairy Milk. Made with milk chocolate for a premium, indulgent chocolate experience.",
    rating: 4.8,
    reviewCount: 32400,
    inStock: true,
  },
  {
    id: "kitkat-4finger-41g",
    name: "KitKat 4 Finger Chocolate Bar",
    brand: "Nestlé",
    category: "snacks",
    price: 30,
    originalPrice: 35,
    discount: "14% off",
    weight: "41 g",
    // Chocolate wafer bar fingers
    image:
      "https://images.unsplash.com/photo-1623660516803-1e5ee27a2bed?w=400&h=400&fit=crop&auto=format",
    description:
      "KitKat 4 Finger is the world-famous chocolate-covered wafer bar. Each crispy wafer finger is covered in smooth milk chocolate for a perfect break-time indulgence.",
    rating: 4.6,
    reviewCount: 28100,
    inStock: true,
  },
  {
    id: "britannia-bourbon-100g",
    name: "Britannia Bourbon Biscuits Chocolate",
    brand: "Britannia",
    category: "snacks",
    price: 35,
    originalPrice: 42,
    discount: "17% off",
    weight: "100 g",
    // Dark chocolate sandwich biscuits with cream
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop&auto=format",
    description:
      "Britannia Bourbon Biscuits are crunchy chocolate biscuits sandwiched with a chocolate cream filling. A classic Indian biscuit enjoyed with tea or coffee for decades.",
    rating: 4.3,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "goodday-cashew-200g",
    name: "Britannia Good Day Cashew Cookies",
    brand: "Britannia",
    category: "snacks",
    price: 45,
    originalPrice: 55,
    discount: "18% off",
    weight: "200 g",
    // Buttery cookies with cashew nuts
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&auto=format",
    description:
      "Britannia Good Day Cashew Cookies are rich, buttery biscuits packed with whole cashew pieces. A delightful treat that pairs perfectly with tea or coffee.",
    rating: 4.4,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "munch-chocolate-bar",
    name: "Nestlé Munch Chocolate Bar Crispy",
    brand: "Nestlé",
    category: "snacks",
    price: 10,
    originalPrice: 12,
    discount: "17% off",
    weight: "23 g",
    // Small crispy chocolate snack bar
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format",
    description:
      "Nestlé Munch is a crispy wafer chocolate bar that delivers a satisfying crunch. Coated in smooth milk chocolate, it's the perfect on-the-go chocolate snack.",
    rating: 4.4,
    reviewCount: 19500,
    inStock: true,
  },
  {
    id: "monaco-salted-200g",
    name: "Parle Monaco Salted Biscuits Classic",
    brand: "Parle",
    category: "snacks",
    price: 35,
    originalPrice: 42,
    discount: "17% off",
    weight: "200 g",
    // Crispy light salted crackers
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop&auto=format&sig=monaco",
    description:
      "Parle Monaco Salted Biscuits are light, crispy biscuits with a classic salted taste. Made with fine flour and a generous topping of salt, perfect with tea or as a snack.",
    rating: 4.3,
    reviewCount: 7650,
    inStock: true,
  },

  // ─── BEVERAGES (14 products) ────────────────────────────────────────────────
  {
    id: "coca-cola-600ml",
    name: "Coca-Cola Original Taste PET Bottle",
    brand: "Coca-Cola",
    category: "beverages",
    price: 40,
    originalPrice: 48,
    discount: "17% off",
    weight: "600 ml",
    // Coca-Cola red bottle
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop&auto=format",
    description:
      "Coca-Cola Original Taste is the world's most loved sparkling beverage. The iconic blend of flavours in every refreshing fizzy sip makes it the perfect companion for any meal.",
    rating: 4.5,
    reviewCount: 34200,
    inStock: true,
  },
  {
    id: "pepsi-600ml",
    name: "Pepsi Cola Carbonated Drink",
    brand: "Pepsi",
    category: "beverages",
    price: 40,
    originalPrice: 48,
    discount: "17% off",
    weight: "600 ml",
    // Pepsi cola bottle
    image:
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400&h=400&fit=crop&auto=format",
    description:
      "Pepsi Cola is a refreshing carbonated soft drink with the bold, iconic Pepsi flavour. Enjoy it ice-cold for maximum refreshment with meals or on its own.",
    rating: 4.3,
    reviewCount: 18900,
    inStock: true,
  },
  {
    id: "sprite-600ml",
    name: "Sprite Lime Flavour Soft Drink",
    brand: "Sprite",
    category: "beverages",
    price: 40,
    originalPrice: 48,
    discount: "17% off",
    weight: "600 ml",
    // Sprite green bottle
    image:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop&auto=format",
    description:
      "Sprite Lime Flavour is a crisp, clear sparkling beverage with a refreshing lemon-lime taste. Its clean, light flavour makes it the perfect thirst-quencher on a hot day.",
    rating: 4.3,
    reviewCount: 12100,
    inStock: true,
  },
  {
    id: "red-bull-250ml",
    name: "Red Bull Energy Drink Original",
    brand: "Red Bull",
    category: "beverages",
    price: 125,
    originalPrice: 150,
    discount: "17% off",
    weight: "250 ml",
    // Red Bull energy drink slim can
    image:
      "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop&auto=format",
    description:
      "Red Bull Energy Drink contains caffeine, taurine, B vitamins, and sugars for a vitalising effect. Proven to improve performance, concentration, and reaction speed.",
    rating: 4.4,
    reviewCount: 4530,
    inStock: true,
  },
  {
    id: "tropicana-orange-1l",
    name: "Tropicana Orange 100% Juice",
    brand: "Tropicana",
    category: "beverages",
    price: 99,
    originalPrice: 125,
    discount: "21% off",
    weight: "1 L",
    // Tropicana orange juice carton
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&auto=format",
    description:
      "Tropicana Orange 100% Juice is squeezed from the finest oranges with no added sugar or preservatives. Every sip is packed with natural Vitamin C for a refreshing, healthy start.",
    rating: 4.4,
    reviewCount: 8720,
    inStock: true,
  },
  {
    id: "real-mango-1l",
    name: "Real Fruit Mango Juice 100% Pure",
    brand: "Real",
    category: "beverages",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "1 L",
    // Mango juice glass
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop&auto=format",
    description:
      "Real Fruit Mango Juice is made from handpicked Alphonso mangoes for an authentic, rich mango taste. No artificial colours, flavours, or preservatives — just pure mango.",
    rating: 4.4,
    reviewCount: 6540,
    inStock: true,
  },
  {
    id: "paper-boat-aamras-250ml",
    name: "Paper Boat Aamras Mango Drink",
    brand: "Paper Boat",
    category: "beverages",
    price: 30,
    originalPrice: 35,
    discount: "14% off",
    weight: "250 ml",
    // Mango aamras drink
    image:
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=400&h=400&fit=crop&auto=format",
    description:
      "Paper Boat Aamras brings back the thick, sweet taste of raw mango. Made with real mango pulp and a hint of cardamom — a seasonal favourite in every sip.",
    rating: 4.3,
    reviewCount: 6540,
    inStock: true,
  },
  {
    id: "nescafe-classic-50g",
    name: "Nescafé Classic Instant Coffee",
    brand: "Nescafé",
    category: "beverages",
    price: 229,
    originalPrice: 285,
    discount: "20% off",
    weight: "50 g",
    // Nescafe coffee jar / dark roasted coffee
    image:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400&h=400&fit=crop&auto=format",
    description:
      "Nescafé Classic Instant Coffee delivers the rich, roasted taste of real coffee in seconds. Made from 100% pure, high-quality coffee beans for a consistently great cup.",
    rating: 4.4,
    reviewCount: 21340,
    inStock: true,
  },
  {
    id: "bru-gold-coffee-200g",
    name: "Bru Gold Freeze Dried Coffee",
    brand: "Bru",
    category: "beverages",
    price: 349,
    originalPrice: 430,
    discount: "19% off",
    weight: "200 g",
    // Instant coffee in jar
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop&auto=format",
    description:
      "Bru Gold Freeze Dried Coffee is made from the finest Arabica and Robusta beans. The freeze-drying process preserves the rich aroma and full-bodied flavour.",
    rating: 4.5,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "lipton-green-tea-25bags",
    name: "Lipton Pure Green Tea Bags",
    brand: "Lipton",
    category: "beverages",
    price: 149,
    originalPrice: 185,
    discount: "19% off",
    weight: "25 bags",
    // Green tea bags in cup
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&auto=format",
    description:
      "Lipton Pure Green Tea is made from the finest young tea leaves for a light, refreshing taste. Rich in antioxidants, it's the healthy choice for daily wellness.",
    rating: 4.3,
    reviewCount: 7650,
    inStock: true,
  },
  {
    id: "tata-tea-gold-250g",
    name: "Tata Tea Gold Premium Tea",
    brand: "Tata Tea",
    category: "beverages",
    price: 179,
    originalPrice: 220,
    discount: "19% off",
    weight: "250 g",
    // Hot tea/chai in glass
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop&auto=format",
    description:
      "Tata Tea Gold is a special blend of long-leaf teas and whole tea leaves from premium gardens. Brews into a perfectly balanced cup with a rich colour and invigorating taste.",
    rating: 4.5,
    reviewCount: 12300,
    inStock: true,
  },
  {
    id: "horlicks-500g",
    name: "Horlicks Original Health Drink",
    brand: "Horlicks",
    category: "beverages",
    price: 269,
    originalPrice: 320,
    discount: "16% off",
    weight: "500 g",
    // Malt health drink / Horlicks-style beverage
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format",
    description:
      "Horlicks Original Health Drink is packed with 23 vital nutrients to support growth and immunity. The classic malted wheat and milk drink loved by families for generations.",
    rating: 4.4,
    reviewCount: 8910,
    inStock: true,
  },
  {
    id: "maaza-mango-600ml",
    name: "Maaza Mango Fruit Drink",
    brand: "Maaza",
    category: "beverages",
    price: 40,
    originalPrice: 48,
    discount: "17% off",
    weight: "600 ml",
    // Mango fruit drink bottle
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=400&fit=crop&auto=format",
    description:
      "Maaza Mango Fruit Drink is made with real mango pulp for a thick, luscious mango taste. A beloved Indian beverage that captures the essence of summer mangoes.",
    rating: 4.5,
    reviewCount: 15600,
    inStock: true,
  },
  {
    id: "minute-maid-pulpy-1l",
    name: "Minute Maid Pulpy Orange Juice",
    brand: "Minute Maid",
    category: "beverages",
    price: 75,
    originalPrice: 95,
    discount: "21% off",
    weight: "1 L",
    // Pulpy orange juice with orange slices
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop&auto=format",
    description:
      "Minute Maid Pulpy Orange Juice with real orange pulp delivers a refreshing taste and Vitamin C. Contains natural orange pulp pieces for an authentic juice experience.",
    rating: 4.2,
    reviewCount: 3980,
    inStock: true,
  },

  // ─── FRUITS (14 products) ───────────────────────────────────────────────────
  {
    id: "banana-500g",
    name: "Fresh Yellow Banana (Elaichi)",
    brand: "Farm Fresh",
    category: "fruits",
    price: 49,
    originalPrice: 60,
    discount: "18% off",
    weight: "500 g (approx 12 pcs)",
    // Bunch of yellow bananas
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop&auto=format",
    description:
      "Fresh Elaichi Bananas are small, sweet, and aromatic — a prized variety known for their superior taste. Naturally ripened, rich in potassium and natural energy.",
    rating: 4.4,
    reviewCount: 3210,
    inStock: true,
  },
  {
    id: "apple-himachal-4pcs",
    name: "Himachal Apple Fresh Crisp",
    brand: "Farm Fresh",
    category: "fruits",
    price: 99,
    originalPrice: 130,
    discount: "24% off",
    weight: "4 pcs (approx 600 g)",
    // Bright red crisp apples
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop&auto=format",
    description:
      "Himachal Apples are grown in the cool mountain valleys of Himachal Pradesh. These crisp, juicy apples have a perfect balance of sweetness and tartness.",
    rating: 4.5,
    reviewCount: 5430,
    inStock: true,
  },
  {
    id: "mango-alphonso-6pcs",
    name: "Alphonso Mango Premium Ratnagiri",
    brand: "Farm Fresh",
    category: "fruits",
    price: 299,
    originalPrice: 399,
    discount: "25% off",
    weight: "6 pcs (approx 1 kg)",
    // Golden yellow Alphonso mangoes
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop&auto=format",
    description:
      "Alphonso Mangoes are the undisputed king of mangoes, known for their rich, creamy, tender pulp and sweet, distinct aroma. Sourced directly from Ratnagiri farms.",
    rating: 4.8,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "orange-nagpur-1kg",
    name: "Nagpur Mandarin Orange Juicy",
    brand: "Farm Fresh",
    category: "fruits",
    price: 69,
    originalPrice: 89,
    discount: "22% off",
    weight: "1 kg (approx 6-8 pcs)",
    // Bright orange mandarin oranges
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop&auto=format",
    description:
      "Nagpur Mandarin Oranges are renowned for their deep orange colour, thin skin, and sweet, juicy segments. Known as the 'Orange City' variety for exceptional quality.",
    rating: 4.3,
    reviewCount: 3210,
    inStock: true,
  },
  {
    id: "watermelon-whole",
    name: "Whole Watermelon Seedless Fresh",
    brand: "Farm Fresh",
    category: "fruits",
    price: 89,
    originalPrice: 120,
    discount: "26% off",
    weight: "1 pc (approx 3 kg)",
    // Watermelon cut open showing red flesh
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=400&fit=crop&auto=format",
    description:
      "Seedless Watermelon is 92% water with a refreshingly sweet red flesh. A perfect summer fruit packed with lycopene, Vitamin C, and hydration in every juicy bite.",
    rating: 4.5,
    reviewCount: 6540,
    inStock: true,
  },
  {
    id: "grapes-green-500g",
    name: "Green Seedless Grapes Sweet",
    brand: "Farm Fresh",
    category: "fruits",
    price: 89,
    originalPrice: 115,
    discount: "23% off",
    weight: "500 g",
    // Bunch of green seedless grapes
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop&auto=format",
    description:
      "Green Seedless Grapes are plump, juicy, and perfectly sweet with a refreshing crunch. A convenient, healthy snack that's loved by adults and kids alike.",
    rating: 4.4,
    reviewCount: 4320,
    inStock: true,
  },
  {
    id: "pomegranate-medium-1pc",
    name: "Fresh Pomegranate Juicy Medium",
    brand: "Farm Fresh",
    category: "fruits",
    price: 79,
    originalPrice: 99,
    discount: "20% off",
    weight: "1 pc (approx 350 g)",
    // Red pomegranate with seeds
    image:
      "https://images.unsplash.com/photo-1615485020579-8ba4cd4a7a82?w=400&h=400&fit=crop&auto=format",
    description:
      "Fresh Pomegranate is packed with juicy, ruby-red arils bursting with antioxidants. Rich in Vitamin C and fibre, it's a nutritional powerhouse and a delicious natural treat.",
    rating: 4.3,
    reviewCount: 2100,
    inStock: true,
  },
  {
    id: "papaya-ripe-1kg",
    name: "Fresh Papaya Ripe Yellow",
    brand: "Farm Fresh",
    category: "fruits",
    price: 59,
    originalPrice: 75,
    discount: "21% off",
    weight: "1 pc (approx 1 kg)",
    // Orange-yellow ripe papaya
    image:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=400&fit=crop&auto=format",
    description:
      "Fresh Ripe Papaya is golden-orange in colour with a sweet, musky flavour. Rich in papain enzyme, Vitamin A, and antioxidants — excellent for digestion and skin health.",
    rating: 4.2,
    reviewCount: 1540,
    inStock: true,
  },
  {
    id: "pineapple-golden",
    name: "Golden Pineapple Fresh Juicy",
    brand: "Farm Fresh",
    category: "fruits",
    price: 79,
    originalPrice: 99,
    discount: "20% off",
    weight: "1 pc (approx 1 kg)",
    // Fresh whole pineapple
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop&auto=format",
    description:
      "Golden Pineapple is sweet and aromatic with a rich tropical flavour. Naturally ripe and juicy, it's perfect for eating fresh, juicing, or adding to desserts and salads.",
    rating: 4.3,
    reviewCount: 2100,
    inStock: true,
  },
  {
    id: "strawberry-250g",
    name: "Fresh Strawberries Sweet Red",
    brand: "Farm Fresh",
    category: "fruits",
    price: 149,
    originalPrice: 189,
    discount: "21% off",
    weight: "250 g",
    // Red strawberries
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop&auto=format",
    description:
      "Fresh Strawberries are hand-picked at peak ripeness for maximum sweetness and flavour. Rich in Vitamin C and antioxidants — delicious fresh, in smoothies, or with cream.",
    rating: 4.6,
    reviewCount: 3120,
    inStock: true,
  },
  {
    id: "kiwi-gold-4pcs",
    name: "Gold Kiwi Fresh Sweet Premium",
    brand: "Farm Fresh",
    category: "fruits",
    price: 149,
    originalPrice: 185,
    discount: "19% off",
    weight: "4 pcs (approx 400 g)",
    // Kiwi fruit cut in half
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=400&fit=crop&auto=format",
    description:
      "Gold Kiwi has a smooth yellow-green flesh that is sweeter and less tangy than green kiwi. Exceptionally high in Vitamin C and loaded with antioxidants for immune support.",
    rating: 4.5,
    reviewCount: 1870,
    inStock: true,
  },
  {
    id: "guava-500g",
    name: "Guava Fresh White Sweet",
    brand: "Farm Fresh",
    category: "fruits",
    price: 39,
    originalPrice: 50,
    discount: "22% off",
    weight: "500 g",
    // Green guava fruit
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400&h=400&fit=crop&auto=format",
    description:
      "Fresh White Guava has a mild, sweet flavour with a crisp, firm texture. Contains 4x more Vitamin C than an orange and is rich in dietary fibre for good digestive health.",
    rating: 4.3,
    reviewCount: 1890,
    inStock: true,
  },
  {
    id: "pears-green-1kg",
    name: "Fresh Pears Green Juicy",
    brand: "Farm Fresh",
    category: "fruits",
    price: 119,
    originalPrice: 149,
    discount: "20% off",
    weight: "1 kg",
    // Green/yellow pears
    image:
      "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=400&h=400&fit=crop&auto=format",
    description:
      "Fresh Green Pears are naturally sweet with a slightly gritty but juicy texture. Rich in fibre and antioxidants, they make a refreshing snack or beautiful addition to salads.",
    rating: 4.2,
    reviewCount: 1230,
    inStock: true,
  },
  {
    id: "mosambi-1kg",
    name: "Sweet Lime Mosambi Fresh",
    brand: "Farm Fresh",
    category: "fruits",
    price: 59,
    originalPrice: 75,
    discount: "21% off",
    weight: "1 kg",
    // Sweet lime / mosambi citrus fruit
    image:
      "https://images.unsplash.com/photo-1580966752880-66e5e9bec543?w=400&h=400&fit=crop&auto=format",
    description:
      "Sweet Lime Mosambi has a mild, sweet citrus flavour with a refreshing, clean taste. Excellent for juicing, it's a natural electrolyte drink rich in Vitamin C.",
    rating: 4.3,
    reviewCount: 1540,
    inStock: true,
  },

  // ─── LAUNDRY (10 products) ──────────────────────────────────────────────────
  {
    id: "surf-excel-1kg",
    name: "Surf Excel Easy Wash Detergent Powder",
    brand: "Surf Excel",
    category: "laundry",
    price: 149,
    originalPrice: 185,
    discount: "19% off",
    weight: "1 kg",
    // Laundry detergent powder box
    image:
      "https://images.unsplash.com/photo-1585566240508-27df3e63e3ed?w=400&h=400&fit=crop&auto=format",
    description:
      "Surf Excel Easy Wash Detergent Powder removes tough stains easily even in less water. Its advanced formula penetrates deep into fabric fibres to lift out stains.",
    rating: 4.5,
    reviewCount: 2847,
    inStock: true,
  },
  {
    id: "ariel-matic-2kg",
    name: "Ariel Matic Front Load Detergent",
    brand: "Ariel",
    category: "laundry",
    price: 299,
    originalPrice: 380,
    discount: "21% off",
    weight: "2 kg",
    // Laundry detergent powder
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&h=400&fit=crop&auto=format",
    description:
      "Ariel Matic is specially designed for front-load washing machines. Its Actilift technology removes up to 30 tough stains in one wash, even at 30°C cold water.",
    rating: 4.6,
    reviewCount: 3210,
    inStock: true,
  },
  {
    id: "rin-advance-1kg",
    name: "Rin Advanced Detergent Powder",
    brand: "Rin",
    category: "laundry",
    price: 109,
    originalPrice: 140,
    discount: "22% off",
    weight: "1 kg",
    // Washing powder / laundry powder
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6132a58d2?w=400&h=400&fit=crop&auto=format",
    description:
      "Rin Advanced Detergent Powder gives you brilliant whiteness and freshness with every wash. Specially formulated to remove stubborn stains while keeping whites dazzlingly bright.",
    rating: 4.3,
    reviewCount: 1956,
    inStock: true,
  },
  {
    id: "comfort-fabric-1l",
    name: "Comfort After Wash Fabric Conditioner",
    brand: "Comfort",
    category: "laundry",
    price: 179,
    originalPrice: 220,
    discount: "19% off",
    weight: "1 L",
    // Fabric softener / conditioner bottle
    image:
      "https://images.unsplash.com/photo-1558618047-f0cefd8636d4?w=400&h=400&fit=crop&auto=format",
    description:
      "Comfort Fabric Conditioner adds a long-lasting fragrance and softness to your clothes. Its micro-conditioner formula reduces wrinkles and makes ironing easier.",
    rating: 4.4,
    reviewCount: 1102,
    inStock: true,
  },
  {
    id: "tide-plus-500g",
    name: "Tide Plus Detergent Washing Powder",
    brand: "Tide",
    category: "laundry",
    price: 89,
    originalPrice: 115,
    discount: "23% off",
    weight: "500 g",
    // Tide-style detergent
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop&auto=format",
    description:
      "Tide Plus Detergent removes stains and keeps clothes bright. Its dual-action formula cleans tough stains while leaving clothes smelling fresh and clean.",
    rating: 4.2,
    reviewCount: 876,
    inStock: true,
  },
  {
    id: "henko-stain-1kg",
    name: "Henko Stain Care Detergent Powder",
    brand: "Henko",
    category: "laundry",
    price: 135,
    originalPrice: 165,
    discount: "18% off",
    weight: "1 kg",
    // Laundry detergent
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format&sig=henko",
    description:
      "Henko Stain Care Detergent Powder is powered by intelligent stain-fighting technology that targets and removes various types of stains including oil, grease, and food stains.",
    rating: 4.1,
    reviewCount: 543,
    inStock: true,
  },
  {
    id: "ezee-liquid-1l",
    name: "Ezee Liquid Detergent Gentle Wash",
    brand: "Ezee",
    category: "laundry",
    price: 199,
    originalPrice: 245,
    discount: "19% off",
    weight: "1 L",
    // Liquid detergent
    image:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=400&fit=crop&auto=format",
    description:
      "Ezee Liquid Detergent is specially formulated for delicate fabrics including woollens and silks. Its gentle formula cleans effectively without damaging fabric fibres.",
    rating: 4.0,
    reviewCount: 432,
    inStock: true,
  },
  {
    id: "surf-bar-250g",
    name: "Surf Excel Detergent Bar",
    brand: "Surf Excel",
    category: "laundry",
    price: 45,
    originalPrice: 55,
    discount: "18% off",
    weight: "250 g",
    // Laundry soap bar for hand washing
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop&auto=format",
    description:
      "Surf Excel Detergent Bar makes scrubbing away stubborn stains quick and easy. Its powerful cleaning formula works effectively on collar and cuff stains.",
    rating: 4.3,
    reviewCount: 2100,
    inStock: true,
  },
  {
    id: "vim-dishwash-500ml",
    name: "Vim Dishwash Liquid Gel Lemon",
    brand: "Vim",
    category: "laundry",
    price: 79,
    originalPrice: 99,
    discount: "20% off",
    weight: "500 ml",
    // Dishwash liquid bottle
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop&auto=format&sig=vim",
    description:
      "Vim Dishwash Liquid Gel with the power of lemon cuts through grease and leaves dishes sparkling clean. Its concentrated formula gives you more washes per bottle.",
    rating: 4.4,
    reviewCount: 3400,
    inStock: true,
  },
  {
    id: "pril-dishwash-750ml",
    name: "Pril Dishwash Liquid Active Lime",
    brand: "Pril",
    category: "laundry",
    price: 99,
    originalPrice: 125,
    discount: "21% off",
    weight: "750 ml",
    // Dish soap bottle
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop&auto=format",
    description:
      "Pril Active Lime Dishwash Liquid effortlessly removes grease and grime from dishes, pots, and pans. Enriched with lime extracts for a fresh, clean finish.",
    rating: 4.2,
    reviewCount: 1876,
    inStock: true,
  },

  // ─── CLEANING (10 products) ─────────────────────────────────────────────────
  {
    id: "dettol-liquid-500ml",
    name: "Dettol Liquid Disinfectant Original",
    brand: "Dettol",
    category: "cleaning",
    price: 149,
    originalPrice: 185,
    discount: "19% off",
    weight: "500 ml",
    // Disinfectant/cleaning liquid bottle
    image:
      "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=400&fit=crop&auto=format",
    description:
      "Dettol Liquid Disinfectant kills 99.9% of germs and bacteria. Use diluted for household cleaning, laundry, or as a personal antiseptic for cuts and wounds.",
    rating: 4.7,
    reviewCount: 5621,
    inStock: true,
  },
  {
    id: "harpic-power-500ml",
    name: "Harpic Power Plus Toilet Cleaner",
    brand: "Harpic",
    category: "cleaning",
    price: 89,
    originalPrice: 112,
    discount: "21% off",
    weight: "500 ml",
    // Toilet cleaner bottle
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop&auto=format",
    description:
      "Harpic Power Plus destroys tough limescale and kills 99.9% of germs under the rim. Its thick formula clings to the bowl for superior cleaning action.",
    rating: 4.5,
    reviewCount: 3201,
    inStock: true,
  },
  {
    id: "colin-glass-500ml",
    name: "Colin Glass & Surface Cleaner Spray",
    brand: "Colin",
    category: "cleaning",
    price: 129,
    originalPrice: 160,
    discount: "19% off",
    weight: "500 ml",
    // Glass surface spray cleaner
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=400&fit=crop&auto=format",
    description:
      "Colin Glass & Surface Cleaner leaves glass, mirrors, and chrome surfaces crystal clear without streaks. Its fast-evaporating formula removes fingerprints and smudges instantly.",
    rating: 4.4,
    reviewCount: 1890,
    inStock: true,
  },
  {
    id: "lizol-floor-1l",
    name: "Lizol Floor Cleaner Citrus",
    brand: "Lizol",
    category: "cleaning",
    price: 199,
    originalPrice: 249,
    discount: "20% off",
    weight: "1 L",
    // Floor cleaner liquid
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&auto=format",
    description:
      "Lizol Floor Cleaner disinfects and cleans all types of floor surfaces leaving a fresh citrus fragrance. Kills 99.9% of germs while cleaning effectively.",
    rating: 4.5,
    reviewCount: 4120,
    inStock: true,
  },
  {
    id: "scotch-brite-scrub",
    name: "Scotch-Brite Heavy Duty Scrub Pad",
    brand: "Scotch-Brite",
    category: "cleaning",
    price: 49,
    originalPrice: 65,
    discount: "25% off",
    weight: "Pack of 3",
    // Kitchen scrub sponge pad
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop&auto=format&sig=scrubpad",
    description:
      "Scotch-Brite Heavy Duty Scrub Pad tackles the toughest burnt-on food and grease. The fibres are interlocked for extra scrubbing power without scratching surfaces.",
    rating: 4.3,
    reviewCount: 2340,
    inStock: true,
  },
  {
    id: "domex-ultra-500ml",
    name: "Domex Ultra Thick Bleach Original",
    brand: "Domex",
    category: "cleaning",
    price: 79,
    originalPrice: 99,
    discount: "20% off",
    weight: "500 ml",
    // Bleach/cleaning bottle
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop&auto=format&sig=domex",
    description:
      "Domex Ultra Thick Bleach kills germs and removes tough stains from toilet bowls and bathroom surfaces. Its thick formula clings for longer contact time.",
    rating: 4.2,
    reviewCount: 980,
    inStock: true,
  },
  {
    id: "febreze-air-300ml",
    name: "Febreze Air Freshener Lavender",
    brand: "Febreze",
    category: "cleaning",
    price: 299,
    originalPrice: 350,
    discount: "15% off",
    weight: "300 ml",
    // Air freshener spray with lavender
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop&auto=format",
    description:
      "Febreze Air Freshener eliminates odours rather than just masking them. The calming lavender fragrance freshens the air and leaves a long-lasting pleasant scent.",
    rating: 4.4,
    reviewCount: 654,
    inStock: true,
  },
  {
    id: "good-knight-refill",
    name: "Good Knight Advanced Mosquito Refill",
    brand: "Good Knight",
    category: "cleaning",
    price: 65,
    originalPrice: 85,
    discount: "24% off",
    weight: "Pack of 2",
    // Mosquito repellent / home protection
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&auto=format",
    description:
      "Good Knight Advanced Mosquito Refill provides up to 45 nights of protection. Its advanced formula creates an invisible barrier against mosquitoes for a safe, peaceful night.",
    rating: 4.6,
    reviewCount: 3987,
    inStock: true,
  },
  {
    id: "hit-cockroach-200ml",
    name: "HIT Cockroach Killer Spray",
    brand: "HIT",
    category: "cleaning",
    price: 119,
    originalPrice: 145,
    discount: "18% off",
    weight: "200 ml",
    // Insect spray aerosol can
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop&auto=format&sig=hit",
    description:
      "HIT Cockroach Killer Spray provides instant kill and long-lasting protection against cockroaches. Its deep-reach nozzle targets hidden areas where pests breed.",
    rating: 4.3,
    reviewCount: 2210,
    inStock: true,
  },
  {
    id: "mortein-insect-killer-300ml",
    name: "Mortein Insect Killer Spray",
    brand: "Mortein",
    category: "cleaning",
    price: 199,
    originalPrice: 245,
    discount: "19% off",
    weight: "300 ml",
    // Insect spray / aerosol
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=400&fit=crop&auto=format&sig=mortein",
    description:
      "Mortein Insect Killer Spray kills flies, mosquitoes, and cockroaches on contact. Its residual action keeps insects away for up to 4 weeks after application.",
    rating: 4.4,
    reviewCount: 1760,
    inStock: true,
  },

  // ─── HAIR CARE (10 products) ────────────────────────────────────────────────
  {
    id: "head-shoulders-200ml",
    name: "Head & Shoulders Classic Clean Shampoo",
    brand: "Head & Shoulders",
    category: "hair-care",
    price: 199,
    originalPrice: 250,
    discount: "20% off",
    weight: "200 ml",
    // Shampoo bottle
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop&auto=format",
    description:
      "Head & Shoulders Classic Clean Shampoo gives you beautiful, dandruff-free hair from the first wash. Its ZPT formula fights dandruff and keeps your scalp healthy.",
    rating: 4.5,
    reviewCount: 8940,
    inStock: true,
  },
  {
    id: "pantene-shampoo-200ml",
    name: "Pantene Smooth & Silky Shampoo",
    brand: "Pantene",
    category: "hair-care",
    price: 219,
    originalPrice: 270,
    discount: "19% off",
    weight: "200 ml",
    // Pantene-style shampoo
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&auto=format",
    description:
      "Pantene Smooth & Silky Shampoo with Pro-V formula smooths and nourishes each hair strand. Tames frizz and adds brilliant shine for silky, smooth hair all day long.",
    rating: 4.4,
    reviewCount: 4320,
    inStock: true,
  },
  {
    id: "dove-shampoo-180ml",
    name: "Dove Intense Repair Shampoo",
    brand: "Dove",
    category: "hair-care",
    price: 189,
    originalPrice: 235,
    discount: "20% off",
    weight: "180 ml",
    // Dove shampoo bottle
    image:
      "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=400&h=400&fit=crop&auto=format",
    description:
      "Dove Intense Repair Shampoo with Keratin Actives penetrates deep inside each strand to repair damage from the first wash. Leaves hair visibly healthier and more resilient.",
    rating: 4.4,
    reviewCount: 5320,
    inStock: true,
  },
  {
    id: "sunsilk-black-shine-200ml",
    name: "Sunsilk Black Shine Shampoo",
    brand: "Sunsilk",
    category: "hair-care",
    price: 169,
    originalPrice: 210,
    discount: "20% off",
    weight: "200 ml",
    // Dark shampoo bottle
    image:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400&h=400&fit=crop&auto=format",
    description:
      "Sunsilk Black Shine Shampoo with Amla flower extract brings back your hair's natural black shine. Strengthens hair to reduce breakage and keeps it glossy and healthy.",
    rating: 4.3,
    reviewCount: 3210,
    inStock: true,
  },
  {
    id: "indulekha-oil-200ml",
    name: "Indulekha Bringha Hair Oil",
    brand: "Indulekha",
    category: "hair-care",
    price: 399,
    originalPrice: 499,
    discount: "20% off",
    weight: "200 ml",
    // Ayurvedic hair oil bottle with herbs
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&auto=format",
    description:
      "Indulekha Bringha Hair Oil is an Ayurvedic formula with Bringharaj, Coconut Oil, and other herbs. Clinical tests show it reduces hair fall and promotes new hair growth.",
    rating: 4.6,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "parachute-coconut-oil-200ml",
    name: "Parachute Advansed Coconut Hair Oil",
    brand: "Parachute",
    category: "hair-care",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "200 ml",
    // Coconut oil jar with coconuts
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop&auto=format",
    description:
      "Parachute Advansed Coconut Hair Oil nourishes and strengthens hair from root to tip. 100% pure coconut oil enriched with essential vitamins for lustrous, healthy hair.",
    rating: 4.5,
    reviewCount: 11200,
    inStock: true,
  },
  {
    id: "loreal-total-repair-200ml",
    name: "L'Oréal Total Repair 5 Shampoo",
    brand: "L'Oréal",
    category: "hair-care",
    price: 289,
    originalPrice: 360,
    discount: "20% off",
    weight: "200 ml",
    // Premium hair shampoo
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop&auto=format",
    description:
      "L'Oréal Total Repair 5 Shampoo targets 5 hair problems: damage, dryness, dullness, roughness, and breakage. Strengthens hair from root to tip for visibly healthier hair.",
    rating: 4.4,
    reviewCount: 6540,
    inStock: true,
  },
  {
    id: "vatika-hair-oil-200ml",
    name: "Vatika Enriched Coconut Hair Oil",
    brand: "Vatika",
    category: "hair-care",
    price: 149,
    originalPrice: 185,
    discount: "19% off",
    weight: "200 ml",
    // Hair oil bottle
    image:
      "https://images.unsplash.com/photo-1559181567-c3190bfa4cfe?w=400&h=400&fit=crop&auto=format",
    description:
      "Vatika Enriched Coconut Hair Oil is fortified with Henna, Amla, and Lemon for conditioning, strengthening, and nourishment. Reduces dandruff and promotes healthy hair growth.",
    rating: 4.3,
    reviewCount: 4230,
    inStock: true,
  },
  {
    id: "tresemme-keratin-400ml",
    name: "TRESemme Keratin Smooth Shampoo",
    brand: "TRESemme",
    category: "hair-care",
    price: 349,
    originalPrice: 435,
    discount: "20% off",
    weight: "400 ml",
    // TRESemme-style shampoo bottle
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&auto=format&sig=tresemme",
    description:
      "TRESemme Keratin Smooth Shampoo with BIOTIN infuses damaged hair with strengthening proteins. Tames frizzy, unmanageable hair for a silky, smooth finish.",
    rating: 4.3,
    reviewCount: 1980,
    inStock: true,
  },
  {
    id: "biotique-bio-kelp-120ml",
    name: "Biotique Bio Kelp Fresh Growth Shampoo",
    brand: "Biotique",
    category: "hair-care",
    price: 179,
    originalPrice: 225,
    discount: "21% off",
    weight: "120 ml",
    // Natural/green botanical shampoo
    image:
      "https://images.unsplash.com/photo-1543159622-04954d7a9e7c?w=400&h=400&fit=crop&auto=format",
    description:
      "Biotique Bio Kelp Shampoo stimulates hair follicles to encourage new hair growth. Powered by Ocean Kelp and Centella Asiatica, this Ayurvedic formula reduces hair thinning.",
    rating: 4.2,
    reviewCount: 1340,
    inStock: true,
  },

  // ─── PERSONAL HYGIENE (10 products) ────────────────────────────────────────
  {
    id: "dettol-soap-pack",
    name: "Dettol Original Soap Bar Pack",
    brand: "Dettol",
    category: "personal-hygiene",
    price: 129,
    originalPrice: 160,
    discount: "19% off",
    weight: "Pack of 4 × 75g",
    // Antibacterial soap bars
    image:
      "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&h=400&fit=crop&auto=format",
    description:
      "Dettol Original Soap Bar protects you from 100 illness-causing germs with its proven antibacterial formula. Leaves skin feeling clean, fresh, and well-protected.",
    rating: 4.6,
    reviewCount: 7830,
    inStock: true,
  },
  {
    id: "dove-beauty-soap-100g",
    name: "Dove Beauty Cream Bar Soap",
    brand: "Dove",
    category: "personal-hygiene",
    price: 79,
    originalPrice: 99,
    discount: "20% off",
    weight: "100 g",
    // Cream moisturizing dove soap
    image:
      "https://images.unsplash.com/photo-1556227834-09f8ad85a2c1?w=400&h=400&fit=crop&auto=format",
    description:
      "Dove Beauty Cream Bar is made with 1/4 moisturising cream that gently cleanses your skin. It doesn't dry skin out like ordinary soap, leaving it soft and smooth.",
    rating: 4.5,
    reviewCount: 5640,
    inStock: true,
  },
  {
    id: "lifebuoy-handwash-250ml",
    name: "Lifebuoy Total 10 Handwash",
    brand: "Lifebuoy",
    category: "personal-hygiene",
    price: 99,
    originalPrice: 125,
    discount: "21% off",
    weight: "250 ml",
    // Hand wash pump bottle
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop&auto=format",
    description:
      "Lifebuoy Total 10 Handwash fights 10 infection-causing germs including H1N1 influenza virus. Its Active5 formula provides thorough protection with every wash.",
    rating: 4.4,
    reviewCount: 4530,
    inStock: true,
  },
  {
    id: "himalaya-neem-face-wash-100ml",
    name: "Himalaya Neem Face Wash Purifying",
    brand: "Himalaya",
    category: "personal-hygiene",
    price: 149,
    originalPrice: 185,
    discount: "19% off",
    weight: "100 ml",
    // Neem face wash / green cleanser
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&auto=format",
    description:
      "Himalaya Purifying Neem Face Wash with Neem and Turmeric purifies skin and prevents pimples. Removes dirt, oil, and impurities for a fresh, clean complexion.",
    rating: 4.4,
    reviewCount: 9870,
    inStock: true,
  },
  {
    id: "colgate-maxfresh-200g",
    name: "Colgate MaxFresh Toothpaste Cool Mint",
    brand: "Colgate",
    category: "personal-hygiene",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "200 g",
    // Colgate toothpaste tube
    image:
      "https://images.unsplash.com/photo-1628524901978-e08ef8219b80?w=400&h=400&fit=crop&auto=format",
    description:
      "Colgate MaxFresh Toothpaste with cooling crystals and Cool Mint flavour gives you long-lasting freshness. Fights cavities and provides a clean, refreshing mouth feel.",
    rating: 4.5,
    reviewCount: 9210,
    inStock: true,
  },
  {
    id: "oral-b-toothbrush",
    name: "Oral-B Pro Expert Toothbrush Soft",
    brand: "Oral-B",
    category: "personal-hygiene",
    price: 69,
    originalPrice: 89,
    discount: "22% off",
    weight: "Pack of 2",
    // Oral-B toothbrush with bristles
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop&auto=format",
    description:
      "Oral-B Pro Expert Toothbrush features cross-action bristles that reach between teeth and along the gumline. Soft, rounded bristle tips are gentle on teeth and gums.",
    rating: 4.4,
    reviewCount: 3450,
    inStock: true,
  },
  {
    id: "gillette-mach3-razor",
    name: "Gillette Mach3 Turbo Manual Razor",
    brand: "Gillette",
    category: "personal-hygiene",
    price: 199,
    originalPrice: 249,
    discount: "20% off",
    weight: "1 unit",
    // Shaving razor
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=400&h=400&fit=crop&auto=format",
    description:
      "Gillette Mach3 Turbo features 3 advanced anti-friction blades for a smooth, close shave with fewer strokes. The Turbo technology provides superior comfort and skin protection.",
    rating: 4.6,
    reviewCount: 5120,
    inStock: true,
  },
  {
    id: "nivea-soft-cream-100ml",
    name: "Nivea Soft Moisturising Cream",
    brand: "Nivea",
    category: "personal-hygiene",
    price: 149,
    originalPrice: 180,
    discount: "17% off",
    weight: "100 ml",
    // Moisturising cream in jar
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&auto=format",
    description:
      "Nivea Soft Moisturising Cream with Vitamin E and Jojoba Oil provides instant moisturisation for face, body, and hands. Lightweight, non-greasy formula absorbs quickly.",
    rating: 4.5,
    reviewCount: 7230,
    inStock: true,
  },
  {
    id: "whisper-ultra-40pads",
    name: "Whisper Ultra Clean Sanitary Pads",
    brand: "Whisper",
    category: "personal-hygiene",
    price: 249,
    originalPrice: 299,
    discount: "17% off",
    weight: "Pack of 40",
    // Personal hygiene product
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop&auto=format&sig=whisper",
    description:
      "Whisper Ultra Clean Sanitary Pads feature Feather Soft cover that stays up to 2x softer even when wet. Its unique design provides leak-lock protection for confident movement.",
    rating: 4.6,
    reviewCount: 4890,
    inStock: true,
  },
  {
    id: "johnson-baby-lotion-100ml",
    name: "Johnson's Baby Milk Lotion",
    brand: "Johnson's",
    category: "personal-hygiene",
    price: 129,
    originalPrice: 160,
    discount: "19% off",
    weight: "100 ml",
    // Baby lotion bottle
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&auto=format",
    description:
      "Johnson's Baby Milk Lotion is clinically proven to be mild and gentle for delicate baby skin. Enriched with milk proteins, it moisturises and softens baby's skin all day.",
    rating: 4.7,
    reviewCount: 6120,
    inStock: true,
  },

  // ─── RICE & DAL (12 products) ───────────────────────────────────────────────
  {
    id: "india-gate-basmati-1kg",
    name: "India Gate Classic Basmati Rice",
    brand: "India Gate",
    category: "rice-dal",
    price: 189,
    originalPrice: 230,
    discount: "18% off",
    weight: "1 kg",
    // Long grain basmati rice
    image:
      "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&h=400&fit=crop&auto=format",
    description:
      "India Gate Classic Basmati Rice is known for its long, slender grains and distinctive aroma. Aged for 24 months for perfect elongation and a fluffy, non-sticky texture.",
    rating: 4.6,
    reviewCount: 6720,
    inStock: true,
  },
  {
    id: "daawat-super-basmati-5kg",
    name: "Daawat Super Basmati Rice Long Grain",
    brand: "Daawat",
    category: "rice-dal",
    price: 699,
    originalPrice: 850,
    discount: "18% off",
    weight: "5 kg",
    // Long grain white rice
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop&auto=format",
    description:
      "Daawat Super Basmati Rice features extra-long grains that elongate beautifully when cooked. The natural aroma and taste make it perfect for biryani and pulao dishes.",
    rating: 4.5,
    reviewCount: 4350,
    inStock: true,
  },
  {
    id: "bb-royal-sona-masoori-5kg",
    name: "BB Royal Sona Masoori Raw Rice",
    brand: "BB Royal",
    category: "rice-dal",
    price: 329,
    originalPrice: 399,
    discount: "18% off",
    weight: "5 kg",
    // Raw white rice
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=400&fit=crop&auto=format&sig=sonamasoori",
    description:
      "BB Royal Sona Masoori Raw Rice is a premium medium-grain rice known for its soft texture and slightly sweet taste. Perfect for everyday cooking, idli, and dosa batter.",
    rating: 4.4,
    reviewCount: 2760,
    inStock: true,
  },
  {
    id: "fortune-toor-dal-1kg",
    name: "Fortune Toor Dal (Arhar)",
    brand: "Fortune",
    category: "rice-dal",
    price: 139,
    originalPrice: 165,
    discount: "16% off",
    weight: "1 kg",
    // Yellow split pigeon pea lentils / toor dal
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&auto=format",
    description:
      "Fortune Toor Dal is carefully cleaned and processed to retain its natural nutrients. These golden split pigeon peas cook quickly and are perfect for everyday dal and sambar.",
    rating: 4.4,
    reviewCount: 3102,
    inStock: true,
  },
  {
    id: "24-mantra-moong-dal-1kg",
    name: "24 Mantra Organic Moong Dal",
    brand: "24 Mantra",
    category: "rice-dal",
    price: 179,
    originalPrice: 220,
    discount: "19% off",
    weight: "1 kg",
    // Green moong lentils
    image:
      "https://images.unsplash.com/photo-1585658374268-e3b6d51ba5f7?w=400&h=400&fit=crop&auto=format",
    description:
      "24 Mantra Organic Moong Dal is sourced from certified organic farms. Rich in protein and easy to digest, these split green gram lentils are ideal for khichdi and soups.",
    rating: 4.5,
    reviewCount: 1540,
    inStock: true,
  },
  {
    id: "tata-sampann-chana-1kg",
    name: "Tata Sampann Chana Dal Unpolished",
    brand: "Tata Sampann",
    category: "rice-dal",
    price: 119,
    originalPrice: 145,
    discount: "18% off",
    weight: "1 kg",
    // Chana dal / chickpea lentils
    image:
      "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=400&h=400&fit=crop&auto=format",
    description:
      "Tata Sampann Chana Dal is unpolished to retain natural goodness and nutrients. Split Bengal gram with earthy flavour, ideal for dal, halwa, and chaat recipes.",
    rating: 4.3,
    reviewCount: 876,
    inStock: true,
  },
  {
    id: "patanjali-masoor-dal-1kg",
    name: "Patanjali Red Masoor Dal",
    brand: "Patanjali",
    category: "rice-dal",
    price: 99,
    originalPrice: 125,
    discount: "21% off",
    weight: "1 kg",
    // Red lentils / masoor dal
    image:
      "https://images.unsplash.com/photo-1560343090-5e1c5e8a0b2a?w=400&h=400&fit=crop&auto=format",
    description:
      "Patanjali Red Masoor Dal is naturally grown and minimally processed. These red lentils cook quickly without soaking and are rich in iron, protein, and fibre.",
    rating: 4.2,
    reviewCount: 654,
    inStock: true,
  },
  {
    id: "tata-sampann-urad-dal-1kg",
    name: "Tata Sampann Urad Dal Black",
    brand: "Tata Sampann",
    category: "rice-dal",
    price: 159,
    originalPrice: 195,
    discount: "18% off",
    weight: "1 kg",
    // Black urad dal / whole black gram
    image:
      "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&h=400&fit=crop&auto=format",
    description:
      "Tata Sampann Urad Dal Black is carefully processed whole black gram. Rich in protein and fibre, it's the main ingredient in dal makhani, idli, and dosa batter.",
    rating: 4.3,
    reviewCount: 1230,
    inStock: true,
  },
  {
    id: "rajdhani-besan-1kg",
    name: "Rajdhani Besan Premium Quality",
    brand: "Rajdhani",
    category: "rice-dal",
    price: 89,
    originalPrice: 110,
    discount: "19% off",
    weight: "1 kg",
    // Chickpea flour / besan powder
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&auto=format",
    description:
      "Rajdhani Besan is milled from premium quality chickpeas for a fine, smooth texture. Essential for pakoras, dhokla, kadhi, and a variety of Indian sweets.",
    rating: 4.4,
    reviewCount: 2100,
    inStock: true,
  },
  {
    id: "aashirvaad-whole-wheat-atta-5kg",
    name: "Aashirvaad Whole Wheat Atta",
    brand: "Aashirvaad",
    category: "rice-dal",
    price: 280,
    originalPrice: 340,
    discount: "18% off",
    weight: "5 kg",
    // Whole wheat atta flour
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop&auto=format",
    description:
      "Aashirvaad Whole Wheat Atta is made from 100% whole wheat grains, ground to perfection. Makes soft, nutritious rotis that are rich in fibre and essential nutrients.",
    rating: 4.6,
    reviewCount: 8910,
    inStock: true,
  },
  {
    id: "fortune-sunflower-oil-1l",
    name: "Fortune Sunlite Refined Sunflower Oil",
    brand: "Fortune",
    category: "rice-dal",
    price: 175,
    originalPrice: 215,
    discount: "19% off",
    weight: "1 L",
    // Sunflower oil bottle
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&auto=format",
    description:
      "Fortune Sunlite Refined Sunflower Oil is light, clear, and virtually odourless. High in Vitamin E and low in saturated fats, it's ideal for everyday cooking and frying.",
    rating: 4.3,
    reviewCount: 3120,
    inStock: true,
  },
  {
    id: "rajma-red-kidney-1kg",
    name: "Rajma Red Kidney Beans Premium",
    brand: "Tata Sampann",
    category: "rice-dal",
    price: 129,
    originalPrice: 159,
    discount: "19% off",
    weight: "1 kg",
    // Red kidney beans / rajma
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop&auto=format",
    description:
      "Premium Red Kidney Beans (Rajma) for the classic Punjabi rajma dish. Thick-skinned with a meaty texture, these beans hold their shape when cooked for an authentic taste.",
    rating: 4.4,
    reviewCount: 1870,
    inStock: true,
  },
];

// Helper: filter products by category id, return all if 'all'
export function productsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

// Helper: get products by tag (e.g. featured on homepage)
export function featuredProducts() {
  return products
    .filter((p) => p.rating >= 4.5)
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 12);
}

// Helper: bestsellers sorted by review count
export function bestsellers() {
  return [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 12);
}
