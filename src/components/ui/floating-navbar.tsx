import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Menu, X } from 'lucide-react';

export default function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
              <Target className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              CareerGuide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/student" className="text-white/80 hover:text-white font-medium transition-all duration-200 hover:scale-105 transform">
              Students
            </Link>
            <Link to="/professional" className="text-white/80 hover:text-white font-medium transition-all duration-200 hover:scale-105 transform">
              Professionals
            </Link>
            <Link to="/careers" className="text-white/80 hover:text-white font-medium transition-all duration-200 hover:scale-105 transform">
              Careers
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/assessment">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transform hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <Link to="/student" className="text-white/80 hover:text-white font-medium py-1" onClick={() => setIsMenuOpen(false)}>
                Students
              </Link>
              <Link to="/professional" className="text-white/80 hover:text-white font-medium py-1" onClick={() => setIsMenuOpen(false)}>
                Professionals
              </Link>
              <Link to="/careers" className="text-white/80 hover:text-white font-medium py-1" onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/assessment" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}