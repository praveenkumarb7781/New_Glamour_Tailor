import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}favicon.jpg`}
              alt="New Glamour Tailor"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-serif text-xl" style={{ fontFamily: 'Playfair Display, serif', color: '#7A1F2B' }}>
                New Glamour
              </div>
              <div className="text-xs" style={{ color: '#C8A96A' }}>Tailor</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") 
                  ? "font-medium" 
                  : "hover:opacity-70"
              }`}
              style={{ color: isActive("/") ? '#7A1F2B' : '#333333' }}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive("/services") 
                  ? "font-medium" 
                  : "hover:opacity-70"
              }`}
              style={{ color: isActive("/services") ? '#7A1F2B' : '#333333' }}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors ${
                isActive("/gallery") 
                  ? "font-medium" 
                  : "hover:opacity-70"
              }`}
              style={{ color: isActive("/gallery") ? '#7A1F2B' : '#333333' }}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about") 
                  ? "font-medium" 
                  : "hover:opacity-70"
              }`}
              style={{ color: isActive("/about") ? '#7A1F2B' : '#333333' }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact") 
                  ? "font-medium" 
                  : "hover:opacity-70"
              }`}
              style={{ color: isActive("/contact") ? '#7A1F2B' : '#333333' }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}