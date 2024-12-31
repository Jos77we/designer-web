import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    price: 1200,
    description: 'Elegant silk evening gown with hand-embroidered details.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    category: 'Evening Wear',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '2',
    name: 'Summer Linen Dress',
    price: 450,
    description: 'Light and breezy linen dress perfect for summer days.',
    image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80',
    category: 'Casual Wear',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Cocktail Dress',
    price: 850,
    description: 'Sophisticated cocktail dress with modern cut and design.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80',
    category: 'Evening Wear',
    sizes: ['XS', 'S', 'M', 'L']
  }
];