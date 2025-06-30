import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Users, Leaf, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Portland, OR',
      comment: 'The quality of craftsmanship is incredible. Every piece tells a story and brings warmth to my home.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Austin, TX',
      comment: 'I love supporting independent artisans. The packaging was beautiful and the shipping was fast.',
      rating: 5,
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Seattle, WA',
      comment: 'Each purchase feels special. The attention to detail and personal touch makes all the difference.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-beige-100 to-olive-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-brown-800 mb-6">
                Handcrafted with 
                <span className="text-olive-600"> Love</span>
              </h1>
              <p className="text-lg text-brown-600 mb-8 leading-relaxed">
                Discover unique, handmade treasures from talented artisans around the world. 
                Each piece is crafted with care, telling a story of tradition, creativity, and sustainable craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-olive-500 text-white font-semibold rounded-md hover:bg-olive-600 transition-colors"
                >
                  Shop Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-brown-600 text-brown-600 font-semibold rounded-md hover:bg-brown-600 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4993739/pexels-photo-4993739.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Handcrafted pottery"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-brown-800">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">Support Artisans</h3>
              <p className="text-brown-600">
                Every purchase directly supports independent creators and their families around the world.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">Eco-Friendly</h3>
              <p className="text-brown-600">
                Sustainable materials and traditional techniques that respect our planet's resources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">Unique & Authentic</h3>
              <p className="text-brown-600">
                Each piece is one-of-a-kind, carrying the personal touch and story of its creator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brown-800 mb-4">
              Featured Creations
            </h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Handpicked treasures from our most talented artisans, each piece carefully selected for its quality and uniqueness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-brown-600 text-white font-semibold rounded-md hover:bg-brown-700 transition-colors"
            >
              View All Products
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brown-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-brown-600">
              Real stories from people who love handcrafted treasures as much as we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-beige-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-brown-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-brown-800">{testimonial.name}</p>
                    <p className="text-sm text-brown-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-olive-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Join Our Artisan Community
          </h2>
          <p className="text-xl text-olive-100 mb-8">
            Subscribe to our newsletter and be the first to discover new collections, 
            meet our artisans, and get exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md text-brown-800 focus:outline-none focus:ring-2 focus:ring-olive-300"
            />
            <button className="px-8 py-3 bg-white text-olive-600 font-semibold rounded-md hover:bg-beige-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;