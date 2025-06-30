import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-olive-600 font-medium">{product.category}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-brown-600">{product.rating}</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-brown-800 mb-2 group-hover:text-olive-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-brown-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-brown-800">
              ${product.price}
            </span>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex items-center space-x-2 bg-olive-500 text-white px-4 py-2 rounded-md hover:bg-olive-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
          
          <p className="text-xs text-brown-500 mt-2">
            By {product.artisan}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;