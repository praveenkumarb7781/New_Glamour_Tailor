import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#7A1F2B' }} className="text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#C8A96A' }}>
              New Glamour Tailor
            </h3>
            <p className="text-sm opacity-90 leading-relaxed" style={{ color: '#F5E9DA' }}>
              Serving the community with trusted tailoring for over 25 years. 
              Crafting elegance one stitch at a time.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4" style={{ color: '#C8A96A' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C8A96A' }} />
                <span className="text-sm" style={{ color: '#F5E9DA' }}>
                  G.S complex, Sendurai Rd, Alagappa Nagar, Vila Ngara, Ariyalur,<br />
                  Tamil Nadu 621704
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" style={{ color: '#C8A96A' }} />
                <span className="text-sm" style={{ color: '#F5E9DA' }}>+91 99947 96074</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4" style={{ color: '#C8A96A' }}>Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919994796074"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#C8A96A' }}
              >
                <MessageCircle className="w-5 h-5" style={{ color: '#7A1F2B' }} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#C8A96A' }}
              >
                <Instagram className="w-5 h-5" style={{ color: '#7A1F2B' }} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#C8A96A' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#7A1F2B' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm" style={{ color: '#F5E9DA' }}>
            © 2026 New Glamour Tailor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}