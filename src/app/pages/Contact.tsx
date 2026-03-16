import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#7A1F2B' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem' }}>
            Contact Us
          </h1>
          <p className="text-lg" style={{ color: '#F5E9DA' }}>
            Get in touch with us for expert tailoring services
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif mb-8" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#7A1F2B' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F5E9DA' }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: '#7A1F2B' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#7A1F2B' }}>Our Location</h3>
                    <p style={{ color: '#333333' }}>
                      G.S complex, Sendurai Rd, Alagappa Nagar, Vila Ngara, Ariyalur,<br />
                      Tamil Nadu 621704
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F5E9DA' }}
                  >
                    <Phone className="w-6 h-6" style={{ color: '#7A1F2B' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#7A1F2B' }}>Phone Number</h3>
                    <a href="tel:+919994796074" className="hover:underline" style={{ color: '#333333' }}>
                      +91 99947 96074
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F5E9DA' }}
                  >
                    <MessageCircle className="w-6 h-6" style={{ color: '#7A1F2B' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#7A1F2B' }}>WhatsApp</h3>
                    <a 
                      href="https://wa.me/919994796074" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline" 
                      style={{ color: '#333333' }}
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F5E9DA' }}
                  >
                    <Clock className="w-6 h-6" style={{ color: '#7A1F2B' }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: '#7A1F2B' }}>Opening Hours</h3>
                    <p style={{ color: '#333333' }}>
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-medium mb-4" style={{ color: '#7A1F2B' }}>Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/919994796074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#7A1F2B' }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#7A1F2B' }}
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=G.S%20complex%2C%20Sendurai%20Rd%2C%20Alagappa%20Nagar%2C%20Vila%20Ngara%2C%20Ariyalur%2C%20Tamil%20Nadu%20621704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#7A1F2B' }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#F5E9DA' }}>
                <h3 className="font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#7A1F2B' }}>
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2" style={{ color: '#333333' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors"
                      style={{ 
                        borderColor: '#C8A96A',
                        backgroundColor: 'white',
                      }}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2" style={{ color: '#333333' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors"
                      style={{ 
                        borderColor: '#C8A96A',
                        backgroundColor: 'white',
                      }}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2" style={{ color: '#333333' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors resize-none"
                      style={{ 
                        borderColor: '#C8A96A',
                        backgroundColor: 'white',
                      }}
                      placeholder="Tell us about your requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#7A1F2B', color: 'white' }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#7A1F2B' }}>
            Find Us On Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6460493433!2d77.59456931482205!3d12.934557990885147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA0LjQiTiA3N8KwMzUnNTEuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shop Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
