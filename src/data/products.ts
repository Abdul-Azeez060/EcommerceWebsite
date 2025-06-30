import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Handwoven Macrame Wall Hanging',
    description: 'Beautiful macrame wall hanging crafted with natural cotton rope, perfect for adding a bohemian touch to any room.',
    price: 68,
    images: [
      'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6474472/pexels-photo-6474472.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home Decor',
    materials: ['Natural Cotton Rope', 'Wooden Dowel'],
    dimensions: '24" x 36"',
    inStock: true,
    stockQuantity: 15,
    artisan: 'Sarah Mitchell',
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'Emily Johnson',
        rating: 5,
        comment: 'Absolutely stunning! The quality is amazing and it looks perfect in my living room.',
        date: '2024-01-15'
      }
    ]
  },
  {
    id: '2',
    name: 'Ceramic Pottery Bowl Set',
    description: 'Set of 4 handcrafted ceramic bowls with a rustic glaze finish. Perfect for serving or display.',
    price: 85,
    images: [
      'https://images.pexels.com/photos/4993739/pexels-photo-4993739.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4993740/pexels-photo-4993740.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Pottery',
    materials: ['High-Fire Stoneware', 'Natural Glaze'],
    dimensions: '6" diameter each',
    inStock: true,
    stockQuantity: 8,
    artisan: 'Michael Chen',
    rating: 4.9,
    reviews: []
  },
  {
    id: '3',
    name: 'Knitted Wool Throw Blanket',
    description: 'Cozy hand-knitted throw blanket made from 100% merino wool in a beautiful cable pattern.',
    price: 145,
    images: [
      'https://images.pexels.com/photos/6466135/pexels-photo-6466135.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Textiles',
    materials: ['100% Merino Wool'],
    dimensions: '50" x 60"',
    inStock: true,
    stockQuantity: 5,
    artisan: 'Anna Rodriguez',
    rating: 4.7,
    reviews: []
  },
  {
    id: '4',
    name: 'Wooden Kitchen Cutting Board',
    description: 'Premium hardwood cutting board with natural edge, hand-sanded and finished with food-safe oil.',
    price: 42,
    images: [
      'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Kitchen',
    materials: ['Walnut Wood', 'Food-Safe Mineral Oil'],
    dimensions: '14" x 10" x 1.5"',
    inStock: true,
    stockQuantity: 20,
    artisan: 'David Thompson',
    rating: 4.6,
    reviews: []
  },
  {
    id: '5',
    name: 'Leather Journal Notebook',
    description: 'Handbound leather journal with recycled paper, perfect for writing, sketching, or journaling.',
    price: 36,
    images: [
      'https://images.pexels.com/photos/3718120/pexels-photo-3718120.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Stationery',
    materials: ['Genuine Leather', 'Recycled Paper'],
    dimensions: '6" x 8"',
    inStock: true,
    stockQuantity: 12,
    artisan: 'Lisa Park',
    rating: 4.5,
    reviews: []
  },
  {
    id: '6',
    name: 'Handmade Candle Set',
    description: 'Set of 3 soy wax candles with natural scents: lavender, vanilla, and eucalyptus.',
    price: 48,
    images: [
      'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home Fragrance',
    materials: ['Soy Wax', 'Essential Oils', 'Cotton Wicks'],
    dimensions: '3" x 4" each',
    inStock: true,
    stockQuantity: 25,
    artisan: 'Rachel Green',
    rating: 4.8,
    reviews: []
  }
];

export const categories = [
  'All',
  'Home Decor',
  'Pottery',
  'Textiles',
  'Kitchen',
  'Stationery',
  'Home Fragrance'
];