import { Link } from "react-router";
import { Phone, MessageCircle, ArrowRight, Scissors, Award, Users, IndianRupee, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const services = [
    {
      title: 'Blouse Stitching',
      description: 'Custom-fitted blouses with intricate designs and perfect finishing',
      image: 'https://images.unsplash.com/photo-1550951195-2cbd9ca5e0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJsb3VzZSUyMHN0aXRjaGluZyUyMGZhYnJpY3xlbnwxfHx8fDE3NzM2NDg4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Kurti Stitching',
      description: 'Trendy and traditional kurtis tailored to your style and measurements',
      image: 'https://images.unsplash.com/photo-1760287363878-1a09af715b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdXJ0aSUyMGRyZXNzJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzM2NDg4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Alterations',
      description: 'Expert alterations to make your clothes fit perfectly',
      image: 'https://images.unsplash.com/photo-1753162661048-4d197a3f6a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwbWVhc3VyaW5nJTIwdGFwZXxlbnwxfHx8fDE3NzM2NDg4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Kids Dresses',
      description: 'Adorable and comfortable dresses for your little ones',
      image: 'https://images.unsplash.com/photo-1684244160171-97f5dac39204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2hpbGRyZW4lMjBjbG90aGluZyUyMGRyZXNzfGVufDF8fHx8MTc3MzY0ODgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const highlights = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Trusted expertise in ladies tailoring',
    },
    {
      icon: Scissors,
      title: 'Perfect Fit Guarantee',
      description: 'We ensure every piece fits perfectly',
    },
    {
      icon: Users,
      title: '1000+ Happy Customers',
      description: 'Serving our community with pride',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Quality work at reasonable rates',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1769275061721-bb6439d24ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRyYWRpdGlvbmFsJTIwZXRobmljJTIwZHJlc3N8ZW58MXx8fHwxNzczNjQ4ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759720885405-999139fec54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBkcmVzcyUyMGVtYnJvaWRlcnklMjBlbGVnYW50fGVufDF8fHx8MTc3MzY0ODgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1701292154541-6ca5d683468f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMHRleHRpbGUlMjBwYXR0ZXJuJTIwZGV0YWlsfGVufDF8fHx8MTc3MzY0ODgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1636483021999-c75dd25fc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2lzc29ycyUyMHRocmVhZCUyMHNld2luZyUyMHRvb2xzfGVufDF8fHx8MTc3MzY0ODgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Excellent work! My bridal blouse came out perfect. Highly recommend for special occasions.',
      rating: 5,
    },
    {
      name: 'Anjali Reddy',
      text: 'Been coming here for years. Always satisfied with the quality and fit. Very reasonable prices too!',
      rating: 5,
    },
    {
      name: 'Lakshmi Krishnan',
      text: 'Best tailor in the area! My daughter\'s birthday dress was beautifully stitched. Thank you!',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771315938116-cd51af9489fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwdGFpbG9yaW5nJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3NzM2NDg4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sewing machine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', lineHeight: '1.2' }}>
            Where Every Stitch Adds Glamour
          </h1>
          <p className="text-xl mb-8 opacity-95" style={{ color: '#F5E9DA' }}>
            25+ Years of Trusted Ladies Tailoring
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919994796074"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#7A1F2B', color: 'white' }}
            >
              <MessageCircle className="w-5 h-5" />
              Book Stitching (WhatsApp)
            </a>
            <a
              href="tel:+919994796074"
              className="px-8 py-3 rounded-lg flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C8A96A', color: '#333333' }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
              Our Services
            </h2>
            <p style={{ color: '#333333' }}>Expert tailoring services for all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium mb-2" style={{ color: '#7A1F2B', fontSize: '1.25rem' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#333333' }}>
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1" style={{ color: '#C8A96A' }}>
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#7A1F2B', color: 'white' }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#F5E9DA' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#7A1F2B' }} />
                  </div>
                  <h3 className="font-medium mb-2" style={{ color: '#7A1F2B' }}>
                    {highlight.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#333333' }}>
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
              Our Work
            </h2>
            <p style={{ color: '#333333' }}>Browse through our beautiful creations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#7A1F2B', color: 'white' }}
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#F5E9DA' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#C8A96A' }} />
                  ))}
                </div>
                <p className="mb-4 italic" style={{ color: '#333333' }}>
                  "{testimonial.text}"
                </p>
                <p className="font-medium" style={{ color: '#7A1F2B' }}>
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1770008022916-bd44a163f524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwY29sb3JmdWwlMjBtYXRlcmlhbHxlbnwxfHx8fDE3NzM2NDg4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            Let's Stitch Your Perfect Style
          </h2>
          <p className="mb-8 text-xl" style={{ color: '#F5E9DA' }}>
            Crafting Elegance One Stitch at a Time
          </p>
          <a
            href="https://wa.me/919994796074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C8A96A', color: '#333333' }}
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}