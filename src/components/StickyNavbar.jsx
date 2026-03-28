import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const StickyNavbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const navContainerStyle = {
    backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: isTransparent ? 'none' : 'blur(20px)',
    boxShadow: isTransparent ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  const linkClass = ({ isActive }) => 
    `text-base font-medium transition-colors duration-200 ${
      isActive 
        ? (isTransparent ? 'text-white font-bold' : 'text-blue-600 font-bold') 
        : (isTransparent ? 'text-gray-100 hover:text-white' : 'text-gray-600 hover:text-blue-600')
    }`;

  const mobileLinkClass = ({ isActive }) => 
    `block py-2 text-base font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'
    }`;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center ${isScrolled ? 'py-3' : 'py-5'}`}
      style={navContainerStyle}
    >
      <Link to="/" className={`text-2xl font-serif tracking-widest font-bold transition-all duration-300 ${isTransparent ? 'text-white' : 'bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent'}`}>
        AMI AESTHETIC
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/products" className={linkClass}>Products</NavLink>
        <NavLink to="/insights" className={linkClass}>Insights</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <Link 
          to="/contact" 
          className={`ml-4 px-5 py-2 rounded-full font-bold transition-all ${isTransparent ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
        >
          Get Quote
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className={`md:hidden text-2xl focus:outline-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-gray-900'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '×' : '☰'}
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col gap-4 md:hidden transition-all duration-300 ease-in-out overflow-hidden px-6 ${isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <NavLink to="/" className={mobileLinkClass}>Home</NavLink>
        <NavLink to="/products" className={mobileLinkClass}>Products</NavLink>
        <NavLink to="/insights" className={mobileLinkClass}>Insights</NavLink>
        <NavLink to="/about" className={mobileLinkClass}>About</NavLink>
        <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default StickyNavbar;