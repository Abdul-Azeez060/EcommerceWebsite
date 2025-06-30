import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-800 text-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-olive-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-serif font-semibold">CraftNest</span>
            </div>
            <p className="text-beige-200 mb-4 max-w-md">
              Discover unique handmade crafts from talented artisans around the world. 
              Each piece tells a story of creativity, tradition, and sustainable craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-beige-200 hover:text-olive-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-beige-200 hover:text-olive-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-beige-200 hover:text-olive-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-beige-200 hover:text-olive-300 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-beige-200 hover:text-olive-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-beige-200 hover:text-olive-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-beige-200 hover:text-olive-300 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-beige-200 hover:text-olive-300 transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-olive-300" />
                <span className="text-beige-200 text-sm">123 Artisan Lane, Craft City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-olive-300" />
                <span className="text-beige-200 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-olive-300" />
                <span className="text-beige-200 text-sm">hello@craftnest.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-brown-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-beige-200">Subscribe to our newsletter for new arrivals and exclusive offers.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow md:w-64 px-4 py-2 rounded-l-md bg-brown-700 text-beige-100 placeholder-beige-300 border border-brown-600 focus:outline-none focus:border-olive-500"
              />
              <button className="px-6 py-2 bg-olive-500 text-white rounded-r-md hover:bg-olive-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-700 pt-8 mt-8 text-center">
          <p className="text-beige-200 text-sm">
            © 2024 CraftNest. All rights reserved. Made with ❤️ for artisans worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;