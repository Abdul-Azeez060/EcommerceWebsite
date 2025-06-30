import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-olive-600" />,
      title: 'Visit Our Studio',
      details: ['123 Artisan Lane', 'Craft City, CC 12345', 'United States']
    },
    {
      icon: <Phone className="w-6 h-6 text-olive-600" />,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Mon-Fri: 9am-6pm PST']
    },
    {
      icon: <Mail className="w-6 h-6 text-olive-600" />,
      title: 'Email Us',
      details: ['hello@craftnest.com', 'support@craftnest.com']
    },
    {
      icon: <Clock className="w-6 h-6 text-olive-600" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed']
    }
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days within the US. Express shipping (2-3 days) is available for an additional fee.'
    },
    {
      question: 'Can I return or exchange items?',
      answer: 'Yes! We offer a 30-day return policy for unused items in original condition. Custom or personalized items cannot be returned.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'We work with select retailers and interior designers. Please contact us directly to discuss wholesale opportunities.'
    },
    {
      question: 'How do I care for handmade items?',
      answer: 'Each product comes with specific care instructions. Generally, we recommend gentle cleaning and avoiding harsh chemicals to preserve the handcrafted quality.'
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-olive-100 to-beige-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brown-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-brown-600 leading-relaxed">
            We'd love to hear from you! Whether you have questions about our products, 
            need help with an order, or want to connect with our artisan community.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-olive-600" />
                </div>
                <h3 className="text-2xl font-semibold text-brown-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-brown-600 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-olive-500 text-white rounded-md hover:bg-olive-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-brown-800 mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brown-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                      <option value="Artisan Partnership">Artisan Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-olive-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-olive-600 transition-colors disabled:bg-olive-300 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brown-800 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-brown-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-brown-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-brown-200 pb-4 last:border-b-0">
                    <h4 className="font-medium text-brown-800 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-brown-600 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-brown-800 mb-4">
                Visit Our Studio
              </h3>
              <div className="bg-beige-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-olive-600 mx-auto mb-2" />
                  <p className="text-brown-600">Interactive map would be here</p>
                  <p className="text-sm text-brown-500">123 Artisan Lane, Craft City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;