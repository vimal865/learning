import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'About', path: '/about' },
  { name: 'Curriculum', path: '/curriculum' },
  { name: 'Batches', path: '/batches' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              'p-2 rounded-xl transition-all duration-300',
              scrolled ? 'bg-navy-700' : 'bg-white/10 backdrop-blur-sm'
            )}>
              <GraduationCap className={cn(
                'w-6 h-6 transition-colors',
                scrolled ? 'text-gold-400' : 'text-gold-400'
              )} />
            </div>
            <span className={cn(
              'font-display text-xl font-bold transition-colors',
              scrolled ? 'text-navy-800' : 'text-white'
            )}>
              FinGrad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-navy-800 bg-navy-100'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant={scrolled ? 'ghost' : 'glass'}
                className={scrolled ? 'text-navy-700' : ''}
              >
                Login
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="gold">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-navy-800 hover:bg-navy-100' : 'text-white hover:bg-white/10'
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-navy-800 bg-navy-100'
                      : 'text-navy-600 hover:bg-navy-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                <Link to="/login" className="block">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/programs" className="block">
                  <Button variant="gold" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
