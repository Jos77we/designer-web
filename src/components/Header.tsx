import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <a href="/#about" className="hover:text-gray-600">About</a>
            <a href="/#portfolio" className="hover:text-gray-600">Portfolio</a>
            <a href="/#process" className="hover:text-gray-600">Process</a>
            <Link to="/shop" className="hover:text-gray-600">Shop</Link>
            <a href="/#contact" className="hover:text-gray-600">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-600"><Linkedin size={20} /></a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-gray-600">Home</Link>
              <a href="/#about" className="hover:text-gray-600">About</a>
              <a href="/#portfolio" className="hover:text-gray-600">Portfolio</a>
              <a href="/#process" className="hover:text-gray-600">Process</a>
              <Link to="/shop" className="hover:text-gray-600">Shop</Link>
              <a href="/#contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;