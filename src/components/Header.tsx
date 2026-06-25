import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Our Outlets', path: '/outlets' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className={`fixed top-0 w-full z-40 py-4 px-4 md:px-12 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/TBH-Logo-1024x1024-1.png" alt="The Bakery House Logo" className="h-24 md:h-32 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-dark hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button 
            className="md:hidden text-dark hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
          
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.form 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute right-full mr-2 hidden md:block overflow-hidden"
                  onSubmit={handleSearch}
                >
                  <input 
                    type="text" 
                    placeholder="Search cakes..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary shadow-sm"
                    autoFocus
                  />
                </motion.form>
              )}
            </AnimatePresence>
            <button 
              className="text-dark hover:text-primary transition-colors p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X size={24} className="hidden md:block" /> : <Search size={24} />}
              <Search size={24} className="md:hidden" />
            </button>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)} 
            className="relative text-dark hover:text-primary transition-colors p-2"
          >
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Off-Canvas Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60]"
            />
            
            {/* Sliding Drawer */}
            <motion.nav 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-serif font-bold text-dark">Menu</h2>
                <button 
                  className="text-dark hover:text-primary transition-colors bg-secondary p-2 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 font-medium text-dark/80">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`hover:text-primary transition-colors text-xl border-b border-gray-100 pb-4 ${location.pathname === link.path ? 'text-primary font-bold border-primary/20' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-12 pb-8">
                <button className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
                  Order Online
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
