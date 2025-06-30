import React from 'react';
import { Heart, Users, Leaf, Award, Globe, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const artisans = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      specialty: 'Macrame & Fiber Arts',
      location: 'Portland, Oregon',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Sarah discovered macrame during college and fell in love with the meditative process of knotting. She sources all her materials from sustainable suppliers.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      specialty: 'Ceramic Pottery',
      location: 'Asheville, North Carolina',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Michael learned pottery from his grandmother in Taiwan. He combines traditional techniques with modern aesthetics, creating pieces that bridge cultures.'
    },
    {
      id: 3,
      name: 'Anna Rodriguez',
      specialty: 'Knitting & Textiles',
      location: 'Santa Fe, New Mexico',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Anna is passionate about preserving traditional knitting patterns while creating contemporary designs. She works exclusively with ethically sourced wool.'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-olive-600" />,
      title: 'Passion for Craft',
      description: 'We believe in the power of human creativity and the beauty that comes from working with your hands.'
    },
    {
      icon: <Users className="w-8 h-8 text-olive-600" />,
      title: 'Supporting Artisans',
      description: 'Every purchase directly supports independent creators and helps preserve traditional crafting techniques.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-olive-600" />,
      title: 'Sustainable Practices',
      description: 'We prioritize eco-friendly materials and processes that respect our planet and future generations.'
    },
    {
      icon: <Award className="w-8 h-8 text-olive-600" />,
      title: 'Quality First',
      description: 'Each piece is carefully curated for exceptional quality, durability, and authentic craftsmanship.'
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-olive-100 to-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brown-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
              CraftNest was born from a simple belief: that handmade goods carry a special magic that 
              mass-produced items simply cannot match. Every stitch, every brushstroke, every carefully 
              shaped curve tells a story of human creativity and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brown-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-brown-600 mb-6 leading-relaxed">
                We connect you with exceptional artisans from around the world, bringing their unique 
                creations directly to your home. Our platform celebrates the art of handmaking while 
                ensuring fair compensation for creators and sustainable practices throughout our supply chain.
              </p>
              <p className="text-lg text-brown-600 leading-relaxed">
                More than just a marketplace, CraftNest is a community that values authenticity, 
                creativity, and the human touch in an increasingly digital world.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-olive-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">50+ Artisans</p>
                    <p className="text-sm opacity-90">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brown-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting artisans to packaging your orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-brown-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-brown-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brown-800 mb-4">
              Meet Our Artisans
            </h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Get to know some of the talented creators whose work graces our collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="bg-beige-50 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">
                    {artisan.name}
                  </h3>
                  <div className="text-sm text-olive-600 mb-4">
                    <p className="font-medium">{artisan.specialty}</p>
                    <p>{artisan.location} • {artisan.experience}</p>
                  </div>
                  <p className="text-brown-600 text-sm leading-relaxed">
                    {artisan.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-olive-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Committed to Sustainability
              </h2>
              <div className="space-y-4 text-olive-100">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 text-olive-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Eco-Friendly Materials</h3>
                    <p>We prioritize natural, renewable, and recycled materials in all our products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Handshake className="w-6 h-6 text-olive-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Fair Trade Practices</h3>
                    <p>Every artisan receives fair compensation for their work and creative contributions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-olive-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Carbon-Conscious Shipping</h3>
                    <p>We offset shipping emissions and use minimal, recyclable packaging materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3737582/pexels-photo-3737582.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable crafting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brown-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-beige-100 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-beige-200 mb-8">
            Become part of a movement that celebrates craftsmanship, supports artisans, 
            and brings beautiful, meaningful objects into everyday life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#newsletter"
              className="px-8 py-3 bg-olive-500 text-white font-semibold rounded-md hover:bg-olive-600 transition-colors"
            >
              Subscribe to Newsletter
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-beige-200 text-beige-200 font-semibold rounded-md hover:bg-beige-200 hover:text-brown-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;