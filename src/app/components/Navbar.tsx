'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className={`font-bold text-2xl ${
                isScrolled ? 'text-amber-600' : 'text-white'
              }`}
            >
              PRAVASA
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('highlights')}
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              } transition-colors`}
            >
              Highlights
            </button>
            <button
              onClick={() => scrollToSection('phase1')}
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              } transition-colors`}
            >
              Phase 1
            </button>
            <button
              onClick={() => scrollToSection('overview')}
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              } transition-colors`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              } transition-colors`}
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('payment')}
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600'
                  : 'text-white hover:text-amber-200'
              } transition-colors`}
            >
              Payment
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isScrolled ? 'currentColor' : 'white'}
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('highlights')}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left py-2 border-b border-gray-100"
              >
                Highlights
              </button>
              <button
                onClick={() => scrollToSection('phase1')}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left py-2 border-b border-gray-100"
              >
                Phase 1
              </button>
              <button
                onClick={() => scrollToSection('overview')}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left py-2 border-b border-gray-100"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left py-2 border-b border-gray-100"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection('payment')}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left py-2 border-b border-gray-100"
              >
                Payment
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300 text-center mt-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
