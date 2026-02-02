export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ceramic Vase',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    description: 'Beautiful handcrafted ceramic vase',
    category: 'Decor',
  },
  {
    id: '2',
    name: 'Woven Basket',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    description: 'Natural woven storage basket',
    category: 'Storage',
  },
  {
    id: '3',
    name: 'Throw Pillow',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1595428776223-ef52624120d2?w=500&h=500&fit=crop',
    description: 'Soft and comfortable throw pillow',
    category: 'Textiles',
  },
  {
    id: '4',
    name: 'Wooden Bowl',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1578978469223-0c0d26ded3c3?w=500&h=500&fit=crop',
    description: 'Handcrafted wooden serving bowl',
    category: 'Kitchen',
  },
  {
    id: '5',
    name: 'Linen Table Runner',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1595428776223-ef52624120d2?w=500&h=500&fit=crop',
    description: 'Premium quality linen table runner',
    category: 'Textiles',
  },
  {
    id: '6',
    name: 'Glass Candle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&h=500&fit=crop',
    description: 'Scented candle in glass container',
    category: 'Lighting',
  },
  {
    id: '7',
    name: 'Plant Pot',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    description: 'Minimalist ceramic plant pot',
    category: 'Plants',
  },
  {
    id: '8',
    name: 'Wall Decor',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&h=500&fit=crop',
    description: 'Modern wall hanging art',
    category: 'Decor',
  },
];
