import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-brown-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">Your Cart is Empty</h2>
            <p className="text-brown-600 mb-8">
              Looks like you haven't added any handcrafted treasures to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-olive-500 text-white font-semibold rounded-md hover:bg-olive-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-brown-800 mb-2">Shopping Cart</h1>
          <p className="text-brown-600">
            {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {state.items.map((item, index) => (
                <div
                  key={item.product.id}
                  className={`p-6 ${index !== state.items.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brown-800 mb-1">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="hover:text-olive-600 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-brown-600 text-sm mb-2">by {item.product.artisan}</p>
                      <p className="text-brown-700 font-semibold">${item.product.price}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-brown-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-beige-100 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-brown-600" />
                        </button>
                        <span className="px-3 py-2 text-brown-800 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-beige-100 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-brown-600" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-brown-300 text-brown-700 rounded-md hover:bg-beige-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>

              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-brown-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-brown-600">Subtotal</span>
                  <span className="text-brown-800">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-600">Shipping</span>
                  <span className="text-brown-800">
                    {state.total >= 50 ? 'Free' : '$8.99'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-600">Tax</span>
                  <span className="text-brown-800">${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <hr className="border-brown-200" />
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-brown-800">Total</span>
                  <span className="text-brown-800">
                    ${(state.total + (state.total >= 50 ? 0 : 8.99) + (state.total * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>

              {state.total < 50 && (
                <div className="mb-4 p-3 bg-olive-50 border border-olive-200 rounded-md">
                  <p className="text-sm text-olive-700">
                    Add ${(50 - state.total).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button className="w-full bg-olive-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-olive-600 transition-colors mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-brown-600">
                  <span>🔒</span>
                  <span>Secure checkout with 256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;