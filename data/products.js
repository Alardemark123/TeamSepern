export const products = [
  {
    id: "1",
    name: "OBSIDIAN TEE",
    price: 85,
    category: "t-shirts",
    description: "Premium heavyweight cotton tee with oversized fit. Featuring minimal branding and meticulous construction.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available"
  },
  {
    id: "2",
    name: "VOID HOODIE",
    price: 195,
    category: "hoodies",
    description: "Ultra-soft French terry hoodie. Relaxed silhouette with dropped shoulders and kangaroo pocket.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    status: "available"
  },
  {
    id: "3",
    name: "ECLIPSE TEE",
    price: 95,
    category: "t-shirts",
    description: "Signature graphic tee with abstract print. Made from 100% organic cotton.",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    status: "available"
  },
  {
    id: "4",
    name: "PHANTOM CREW",
    price: 165,
    category: "sweatshirts",
    description: "Minimalist crewneck sweatshirt. Premium fleece interior with ribbed cuffs and hem.",
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    status: "available"
  },
  {
    id: "5",
    name: "SHADOW TEE",
    price: 75,
    category: "t-shirts",
    description: "Essential everyday tee with a contemporary fit. Soft hand feel and durable construction.",
    images: [
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available"
  },
  {
    id: "6",
    name: "ONYX HOODIE",
    price: 210,
    category: "hoodies",
    description: "Heavyweight zip-up hoodie with hidden pockets. Water-resistant exterior coating.",
    images: [
      "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    status: "limited"
  },
  {
    id: "7",
    name: "NOIR LONGLINE",
    price: 110,
    category: "t-shirts",
    description: "Extended length tee with curved hem. Perfect layering piece for contemporary looks.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1554568218-0f960b8e37b7?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    status: "available"
  },
  {
    id: "8",
    name: "CARBON CREW",
    price: 175,
    category: "sweatshirts",
    description: "Premium heavyweight crewneck with embroidered logo. Garment-dyed for a vintage aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800&q=80",
      "https://images.unsplash.com/photo-1613852348851-df1739db8201?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available"
  }
];

export const getProduct = (id) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(p => p.category === category);
};
