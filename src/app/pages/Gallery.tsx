import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import blouse1 from "../../../image1.png";
import blouse2 from "../../../image2.png";
import blouse3 from "../../../image3.png";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filters = ['All', 'Blouse', 'Kurti', 'Bridal', 'Kids'];

  const galleryItems = [
    { image: blouse1, category: 'Blouse' },
    { image: 'https://images.unsplash.com/photo-1760287363878-1a09af715b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdXJ0aSUyMGRyZXNzJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzM2NDg4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Kurti' },
    { image: 'https://images.unsplash.com/photo-1759720885405-999139fec54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBkcmVzcyUyMGVtYnJvaWRlcnklMjBlbGVnYW50fGVufDF8fHx8MTc3MzY0ODgwM3ww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Bridal' },
    { image: 'https://images.unsplash.com/photo-1684244160171-97f5dac39204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2hpbGRyZW4lMjBjbG90aGluZyUyMGRyZXNzfGVufDF8fHx8MTc3MzY0ODgwNHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Kids' },
    { image: 'https://images.unsplash.com/photo-1769275061721-bb6439d24ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRyYWRpdGlvbmFsJTIwZXRobmljJTIwZHJlc3N8ZW58MXx8fHwxNzczNjQ4ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Kurti' },
    { image: 'https://images.unsplash.com/photo-1701292154541-6ca5d683468f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMHRleHRpbGUlMjBwYXR0ZXJuJTIwZGV0YWlsfGVufDF8fHx8MTc3MzY0ODgwNnww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Bridal' },
    { image: 'https://images.unsplash.com/photo-1770008022916-bd44a163f524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwY29sb3JmdWwlMjBtYXRlcmlhbHxlbnwxfHx8fDE3NzM2NDg4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Bridal' },
    { image: 'https://images.unsplash.com/photo-1753162661048-4d197a3f6a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwbWVhc3VyaW5nJTIwdGFwZXxlbnwxfHx8fDE3NzM2NDg4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Kurti' },
    { image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JpbmclMjBzaG9wJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNjQ4ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Kids' },
    { image: blouse2, category: 'Blouse' },
    { image: blouse3, category: 'Blouse' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#7A1F2B' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem' }}>
            Our Gallery
          </h1>
          <p className="text-lg" style={{ color: '#F5E9DA' }}>
            Browse through our beautiful creations and craftsmanship
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b" style={{ borderColor: '#F5E9DA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter 
                    ? 'shadow-md' 
                    : 'hover:opacity-70'
                }`}
                style={{
                  backgroundColor: activeFilter === filter ? '#7A1F2B' : '#F5E9DA',
                  color: activeFilter === filter ? 'white' : '#333333',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5E9DA' }}>
        <div className="max-w-7xl mx-auto">
          <Masonry columnsCount={3} gutter="16px">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setLightboxImage(item.image)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.category} ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery item"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
