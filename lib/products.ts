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
    image: 'https://m.media-amazon.com/images/I/714zxCaZ76L._AC_SL1500_.jpg',
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
    image: 'https://m.media-amazon.com/images/I/71VmYelaTBL._AC_SL1500_.jpg',
    description: 'Soft and comfortable throw pillow',
    category: 'Textiles',
  },
  {
    id: '4',
    name: 'Wooden Bowl',
    price: 32.99,
    image: 'https://i.etsystatic.com/28552799/r/il/3b76b6/3005587472/il_fullxfull.3005587472_4bzl.jpg',
    description: 'Handcrafted wooden serving bowl',
    category: 'Kitchen',
  },
  {
    id: '5',
    name: 'Linen Table Runner',
    price: 42.99,
    image: 'https://imagescdn.simons.ca/images/10678-6232103-16-A1_2/beige-pure-linen-table-runner-see-available-sizes.jpg?__=2',
    description: 'Premium quality linen table runner',
    category: 'Textiles',
  },
  {
    id: '6',
    name: 'Glass Candle',
    price: 24.99,
    image: 'https://m.media-amazon.com/images/I/81LOAAWEMqL._AC_SL1500_.jpg',
    description: 'Scented candle in glass container',
    category: 'Lighting',
  },
  {
    id: '7',
    name: 'Plant Pot',
    price: 19.99,
    image: 'https://tse3.mm.bing.net/th/id/OIP.6we9MtRlAOJklAPwoazm8QHaGI?pid=Api&P=0&h=180',
    description: 'Minimalist ceramic plant pot',
    category: 'Plants',
  },
  {
    id: '8',
    name: 'Wall Decor',
    price: 38.99,
    image: 'https://secure.img1-fg.wfcdn.com/im/95340671/compr-r85/7862/78626495/wall-decor.jpg',
    description: 'Modern wall hanging art',
    category: 'Decor',
  },
];
