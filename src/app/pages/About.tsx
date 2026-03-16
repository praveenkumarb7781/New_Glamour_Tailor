import { Award, Users, Scissors, Ruler, Heart, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const highlights = [
    { icon: Award, label: '25+ Years', sublabel: 'Experience' },
    { icon: Scissors, label: '1000+', sublabel: 'Dresses Stitched' },
    { icon: Users, label: 'Trusted', sublabel: 'Local Tailor' },
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Consultation',
      description: 'We discuss your requirements, preferences, and design ideas to understand your vision.',
    },
    {
      icon: Ruler,
      title: 'Measurements',
      description: 'Precise measurements are taken to ensure a perfect fit tailored to your body.',
    },
    {
      icon: Scissors,
      title: 'Stitching',
      description: 'Our experienced tailors craft your garment with attention to every detail.',
    },
    {
      icon: CheckCircle,
      title: 'Final Fitting',
      description: 'A final fitting ensures everything is perfect before you take your garment home.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#7A1F2B' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem' }}>
            About Us
          </h1>
          <p className="text-lg" style={{ color: '#F5E9DA' }}>
            Crafting perfect fits with passion and precision for over 25 years
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#F5E9DA' }}>
                <Heart className="w-4 h-4" style={{ color: '#7A1F2B' }} />
                <span style={{ color: '#7A1F2B' }}>Our Story</span>
              </div>
              <h2 className="font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
                Serving the Community with Quality Stitching
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#333333' }}>
                <p>
                  For over 25 years, New Glamour Tailor has been the trusted name in ladies tailoring in our community. 
                  What started as a small tailoring shop has grown into a beloved local business, thanks to our 
                  commitment to quality, precision, and customer satisfaction.
                </p>
                <p>
                  Serving the community with trusted tailoring for over 25 years. Every garment we create is a 
                  testament to our dedication to the craft. We believe that well-fitted clothes have the power to 
                  make you feel confident and beautiful. That's why we pour our heart and expertise into every stitch.
                </p>
                <p>
                  Crafting elegance one stitch at a time. Our experienced team understands the nuances of traditional 
                  and modern designs, ensuring that whether you're looking for a classic blouse or a contemporary kurti, 
                  we deliver perfection every time.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JpbmclMjBzaG9wJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNjQ4ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tailoring shop"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#7A1F2B' }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#7A1F2B' }}>
                    {highlight.label}
                  </div>
                  <div style={{ color: '#333333' }}>{highlight.sublabel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
              Our Process
            </h2>
            <p className="text-lg" style={{ color: '#333333' }}>
              From consultation to final fitting, we ensure perfection at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                      style={{ backgroundColor: '#C8A96A' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: '#7A1F2B' }} />
                    </div>
                    <div
                      className="absolute top-8 left-1/2 w-full h-0.5 -z-0 hidden lg:block"
                      style={{ backgroundColor: '#F5E9DA', display: index === 3 ? 'none' : 'block' }}
                    ></div>
                    <h3 className="font-medium mb-2" style={{ color: '#7A1F2B', fontSize: '1.25rem' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#333333' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#7A1F2B' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-medium mb-2" style={{ color: '#7A1F2B' }}>Quality</h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                We never compromise on the quality of our work and materials
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-medium mb-2" style={{ color: '#7A1F2B' }}>Trust</h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                Building lasting relationships with our customers through honesty
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-medium mb-2" style={{ color: '#7A1F2B' }}>Excellence</h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                Striving for perfection in every garment we create
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}