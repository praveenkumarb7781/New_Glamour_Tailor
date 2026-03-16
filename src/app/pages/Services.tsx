import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Services() {
  const services = [
    {
      title: 'Blouse Stitching',
      description: 'Custom-fitted blouses with intricate designs, perfect finishing, and attention to detail. We offer a wide range of neck designs, sleeve patterns, and back designs to match your saree perfectly.',
      price: '₹300 - ₹800',
      image: 'https://images.unsplash.com/photo-1550951195-2cbd9ca5e0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJsb3VzZSUyMHN0aXRjaGluZyUyMGZhYnJpY3xlbnwxfHx8fDE3NzM2NDg4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Multiple neck designs', 'Custom sleeve patterns', 'Perfect fitting', 'Quality stitching'],
    },
    {
      title: 'Kurti Stitching',
      description: 'Trendy and traditional kurtis tailored to your style and measurements. From casual everyday wear to elegant party wear, we create kurtis that reflect your personality.',
      price: '₹500 - ₹1,200',
      image: 'https://images.unsplash.com/photo-1760287363878-1a09af715b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdXJ0aSUyMGRyZXNzJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzM2NDg4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Anarkali style', 'Straight cut', 'A-line design', 'Custom embroidery'],
    },
    {
      title: 'Bridal Blouse',
      description: 'Exquisite bridal blouses for your special day. Hand-crafted with premium materials, intricate embroidery, and meticulous attention to every detail to make you look stunning.',
      price: '₹1,500 - ₹5,000',
      image: 'https://images.unsplash.com/photo-1759720885405-999139fec54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBkcmVzcyUyMGVtYnJvaWRlcnklMjBlbGVnYW50fGVufDF8fHx8MTc3MzY0ODgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Heavy embroidery work', 'Stone & bead work', 'Designer patterns', 'Premium fabrics'],
    },
    {
      title: 'Alterations',
      description: 'Expert alterations to make your clothes fit perfectly. Whether it\'s adjusting the fit, shortening length, or modifying designs, we ensure your garments look tailor-made.',
      price: '₹200 - ₹600',
      image: 'https://images.unsplash.com/photo-1753162661048-4d197a3f6a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwbWVhc3VyaW5nJTIwdGFwZXxlbnwxfHx8fDE3NzM2NDg4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Sizing adjustments', 'Length modifications', 'Design changes', 'Quick turnaround'],
    },
    {
      title: 'Kids Dresses',
      description: 'Adorable and comfortable dresses for your little ones. From party frocks to traditional wear, we create outfits that kids love to wear and parents love to see.',
      price: '₹400 - ₹1,000',
      image: 'https://images.unsplash.com/photo-1684244160171-97f5dac39204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2hpbGRyZW4lMjBjbG90aGluZyUyMGRyZXNzfGVufDF8fHx8MTc3MzY0ODgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Party frocks', 'Traditional wear', 'Comfortable fabrics', 'Age-appropriate designs'],
    },
    {
      title: 'Churidar & Salwar',
      description: 'Classic churidar and salwar suits crafted with precision. Perfect for everyday wear or special occasions, tailored to ensure comfort and style.',
      price: '₹600 - ₹1,500',
      image: 'https://images.unsplash.com/photo-1769275061721-bb6439d24ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRyYWRpdGlvbmFsJTIwZXRobmljJTIwZHJlc3N8ZW58MXx8fHwxNzczNjQ4ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Punjabi suits', 'Patiala style', 'Anarkali sets', 'Palazzo combinations'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#7A1F2B' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem' }}>
            Our Services
          </h1>
          <p className="text-lg" style={{ color: '#F5E9DA' }}>
            Expert tailoring services crafted with 25+ years of experience
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#F5E9DA', color: '#7A1F2B' }}>
                    {service.price}
                  </div>
                  <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#7A1F2B' }}>
                    {service.title}
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: '#333333' }}>
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-medium mb-3" style={{ color: '#7A1F2B' }}>What We Offer:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8A96A' }}></div>
                          <span style={{ color: '#333333' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#7A1F2B' }}>
            Ready to Get Started?
          </h2>
          <p className="mb-8" style={{ color: '#333333' }}>
            Book your stitching service today and experience the perfect fit
          </p>
          <a
            href="https://wa.me/919994796074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#7A1F2B', color: 'white' }}
          >
            <MessageCircle className="w-5 h-5" />
            Book Stitching on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
