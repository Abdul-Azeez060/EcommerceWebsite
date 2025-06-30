import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brown-800 mb-4">Product Not Found</h2>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-olive-500 text-white rounded-md hover:bg-olive-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-brown-600 hover:text-olive-600 transition-colors">
              Home
            </Link>
            <span className="text-brown-400">/</span>
            <Link to="/products" className="text-brown-600 hover:text-olive-600 transition-colors">
              Products
            </Link>
            <span className="text-brown-400">/</span>
            <span className="text-brown-800 font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-olive-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-olive-100 text-olive-700 text-sm font-medium rounded-full mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-brown-800 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-brown-600">({product.rating})</span>
                </div>
                <span className="text-brown-500">•</span>
                <span className="text-brown-600">by {product.artisan}</span>
              </div>
              
              <p className="text-3xl font-bold text-brown-800 mb-6">
                ${product.price}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-brown-800 mb-2">Description</h3>
              <p className="text-brown-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-brown-800 mb-2">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-beige-100 text-brown-700 text-sm rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-brown-800 mb-2">Dimensions</h3>
              <p className="text-brown-600">{product.dimensions}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="quantity" className="text-sm font-medium text-brown-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
                >
                  {[...Array(Math.min(product.stockQuantity, 10))].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                
                {product.stockQuantity <= 5 && (
                  <span className="text-sm text-red-600">
                    Only {product.stockQuantity} left in stock
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center space-x-2 bg-olive-500 text-white px-8 py-3 rounded-md hover:bg-olive-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                
                <div className="flex space-x-2">
                  <button className="p-3 border border-brown-300 rounded-md hover:bg-beige-100 transition-colors">
                    <Heart className="w-5 h-5 text-brown-600" />
                  </button>
                  <button className="p-3 border border-brown-300 rounded-md hover:bg-beige-100 transition-colors">
                    <Share2 className="w-5 h-5 text-brown-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white p-6 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-olive-600" />
                  <div>
                    <p className="text-sm font-medium text-brown-800">Free Shipping</p>
                    <p className="text-xs text-brown-600">Orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-olive-600" />
                  <div>
                    <p className="text-sm font-medium text-brown-800">Quality Guarantee</p>
                    <p className="text-xs text-brown-600">Handcraft promise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-olive-600" />
                  <div>
                    <p className="text-sm font-medium text-brown-800">30-Day Returns</p>
                    <p className="text-xs text-brown-600">Easy returns policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-brown-800 mb-8">Customer Reviews</h2>
          
          {product.reviews.length === 0 ? (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-brown-600">No reviews yet. Be the first to review this product!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold text-brown-800">{review.userName}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-brown-500">{review.date}</span>
                  </div>
                  <p className="text-brown-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;