import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMapMarkerAlt, FaInfoCircle, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import logoWhite from '/logoWhite.png'; // White logo for dark background
import logoBlack from '/logoBlack.png'; // Black logo for light background

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  const handleClickOutside = (event) => {
    if (event.target.closest('.language-dropdown')) {
      return; // Do nothing if clicked inside the dropdown
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.2); // Check if scrolled down 20%
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll); // Clean up the scroll event listener
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { content } = useLanguage();

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out ${isScrolled ? 'bg-background text-black' : 'bg-transparent text-primary shadow-none'}`}>
      <div className="bg-background flex justify-end items-center px-14 py-1">
        <a href={`tel:${content.businessInfo.hotline.replace(/\s+/g, '')}`} className="text-primary text-sm lg:text-md">
          <span className="block sm:hidden">{content.businessInfo.shortHotlineText}{content.businessInfo.hotline}</span>
          <span className="hidden sm:block">{content.businessInfo.longHotlineText}{content.businessInfo.hotline}</span>
        </a>
      </div>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <Link to="/">
              <img 
                src={isScrolled ? logoBlack : logoWhite} 
                alt="TK & Associates Logo" 
                className={`h-9 w-auto max-w-full rounded ${isScrolled ? 'border border-black' : 'border border-white'}`}  
                />
            </Link>
            <Link to="/" className={`hidden md:block font-secondary font-bold ${isScrolled ? 'text-black' : 'text-white'} hover:text-accent transition duration-300`}>
              {content.businessInfo.name}
            </Link>
          </div>

          <div className="hidden lg:flex space-x-6">
            <Link to="/about" className={`hover:text-accent transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              {content.menu.about}
            </Link>
            <Link to="/practices" className={`hover:text-accent transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              {content.menu.practices}
            </Link>
            <Link to="/blog" className={`hover:text-accent transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              {content.menu.blog}
            </Link>
            <Link to="/location" className={`flex items-center hover:text-accent transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              <FaMapMarkerAlt className="mr-2" /> {content.menu.location}
            </Link>
            <Link to="/contact" className={`flex items-center hover:text-accent transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              <FaInfoCircle className="mr-2" /> {content.menu.contact}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative language-dropdown">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className={`flex items-center px-2 bg-background rounded-sm focus:outline-none ${isScrolled ? 'text-black border border-black' : 'text-primary'}`}
              >
                {language === 'en' ? 'En' : 'Vi'}
                <FaChevronDown size={12} className="ml-2" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-16 bg-white border border-primary rounded shadow-lg z-50">
                  <button 
                    onClick={() => { setLanguage('en'); setIsDropdownOpen(false); }} 
                    className="block px-4 py-2 text-left text-primary hover:bg-primary hover:text-white w-full transition duration-200"
                  >
                    En
                  </button>
                  <button 
                    onClick={() => { setLanguage('vi'); setIsDropdownOpen(false); }} 
                    className="block px-4 py-2 text-left text-primary hover:bg-primary hover:text-white w-full transition duration-200"
                  >
                    Vi
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={toggleMenu} 
              className={`block lg:hidden focus:outline-none transition-transform delay-150 duration-1000 transform hover:scale-110 ${isScrolled ? 'text-black' : 'text-white'}`}
              >
              {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`bg-background text-primary shadow-lg overflow-hidden transition-transform duration-1000 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link to="/about" className={`hover:text-accent transition duration-300 font-bold ${isScrolled ? 'text-black' : 'text-primary'}`} onClick={toggleMenu}>
                {content.menu.about}
              </Link>
              <Link to="/practices" className={`hover:text-accent transition duration-300 font-bold ${isScrolled ? 'text-black' : 'text-primary'}`} onClick={toggleMenu}>
                {content.menu.practices}
              </Link>
              <Link to="/blog" className={`hover:text-accent transition duration-300 font-bold ${isScrolled ? 'text-black' : 'text-primary'}`} onClick={toggleMenu}>
                {content.menu.blog}
              </Link>

              <hr className="w-4/5 border-accent opacity-50" />

              <Link to="/location" className={`flex items-center hover:text-accent transition duration-300 font-bold ${isScrolled ? 'text-black' : 'text-primary'}`} onClick={toggleMenu}>
                <FaMapMarkerAlt className="mr-2" /> {content.menu.location}
              </Link>
              <Link to="/contact" className={`flex items-center hover:text-accent transition duration-300 font-bold ${isScrolled ? 'text-black' : 'text-primary'}`} onClick={toggleMenu}>
                <FaInfoCircle className="mr-2" /> {content.menu.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
