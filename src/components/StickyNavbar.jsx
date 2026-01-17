import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const StickyNavbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 1.0)',
    backdropFilter: isTransparent ? 'none' : 'blur(20px)',
    boxShadow: isTransparent ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.05)',
    padding: isScrolled ? '0.8rem 2rem' : '1.2rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: isTransparent ? '#fff' : '#333',
    transition: 'color 0.3s ease',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '20px',
  };

  const getLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? (isTransparent ? '#fff' : '#0056b3') : (isTransparent ? '#f0f0f0' : '#333'),
    fontWeight: isActive ? '600' : '400',
    fontSize: '1rem',
    transition: 'color 0.2s ease',
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>AMI AESTHETIC</Link>
      <div style={linkContainerStyle}>
        <NavLink to="/" style={getLinkStyle}>Home</NavLink>
        
        <NavLink to="/products" style={getLinkStyle}>Products</NavLink>
        <NavLink to="/treatments" style={getLinkStyle}>Treatments</NavLink>
        <NavLink to="/insights" style={getLinkStyle}>Insights</NavLink>
        <NavLink to="/about" style={getLinkStyle}>About</NavLink>
        <NavLink to="/contact" style={getLinkStyle}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default StickyNavbar;