import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import logo from '/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (event.target.closest('.language-dropdown')) {
      return; // Do nothing if clicked inside the dropdown
    }
    setIsDropdownOpen(false);
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { content } = useLanguage();

  return (
    <nav className="bg-background text-primary shadow-none fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out">
      <div className="container mx-auto px-6 py-4">
        
        {/* Logo, Hotline, and Mobile Menu Button */}
        <div className="flex items-center justify-between">
          {/* Logo aligned to the left */}
          
          <div className="block sm:hidden">
            <Link to="/">
              <img src={logo} alt="TK & Associates Logo" className="h-9 w-auto max-w-full border border-primary rounded" />
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-transform duration-1000 ease-in-out">
  <img src={logo} alt="TK & Associates Logo" className="h-auto max-h-full border border-primary rounded" style={{ maxHeight: '1em' }} />
  <Link to="/" className="text-primary hover:text-accent transition duration-300">{content.businessInfo.name}</Link>
</div>


          {/* Hotline and Mobile Menu - on the same line as logo */}
          <div className="flex items-center space-x-6">
            
            {/* Hotline for large screens */}
            <a href={`tel:${content.businessInfo.hotline.replace(/\s+/g, '')}`} className="flex items-center">
              <div className="hidden md:flex items-center text-primary border rounded-full border-primary p-1">
                {/* Block with hotline text and number */}
                <div className="flex flex-col ml-3">
                  {/* <span className="text-base lg:text-lg">Hotline</span> */}
                  <span className="pr-2">{content.businessInfo.hotline}</span>
                </div>
                {/* Phone icon inside a circle */}
                <div className="flex items-center justify-center bg-primary rounded-full p-2">
                  <FaPhoneAlt className="text-white text-sm lg:text-md" />
                </div>
              </div>
            </a>

            {/* Language Switcher */}
            <div className="relative language-dropdown">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="flex items-center px-3 py-1 bg-background border border-primary rounded-full text-primary focus:outline-none"
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
            {/* Mobile Menu Button and Hotline for small screens */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Hotline icon and text for mobile */}
              <a href="tel:+1234567890" className="flex items-center">
                <div className="flex items-center text-primary">
                  <div className="flex items-center justify-center border-primary border rounded-full p-2">
                    <FaPhoneAlt className="text-primary text-lg" />
                  </div>
                  <span className="ml-2">Hotline</span>
                </div>
              </a>
              

              {/* Mobile Menu Button */}
              <button onClick={toggleMenu} className="focus:outline-none transition-transform delay-150 duration-1000 transform hover:scale-110 text-primary">
                {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Links - Aligned on a new line on large screens */}
        <div className="hidden md:flex w-full justify-between items-center mt-6 lg:mt-8">
          {/* Left-aligned links (About, Practices, Blog) */}
          <div className="flex space-x-6">
            <Link to="/about" className="text-primary hover:text-accent transition duration-300 font-bold">{content.menu.about}</Link>
            <Link to="/practices" className="text-primary hover:text-accent transition duration-300 font-bold">{content.menu.practices}</Link>
            <Link to="/blog" className="text-primary hover:text-accent transition duration-300 font-bold">{content.menu.blog}</Link>
          </div>

          {/* Right-aligned links (Location, Contact) */}
          <div className="flex space-x-6">
            <Link to="/location" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {content.menu.location}
            </Link>
            <Link to="/contact" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center">
              <FaInfoCircle className="mr-2" /> {content.menu.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only rendered when open */}
      {isOpen && (
        <div className={`bg-background text-primary shadow-lg overflow-hidden transition-transform duration-1000 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/about" className="text-primary hover:text-accent transition duration-300 font-bold" onClick={toggleMenu}>{content.menu.about}</Link>
            <Link to="/practices" className="text-primary hover:text-accent transition duration-300 font-bold" onClick={toggleMenu}>{content.menu.practices}</Link>
            <Link to="/blog" className="text-primary hover:text-accent transition duration-300 font-bold" onClick={toggleMenu}>{content.menu.blog}</Link>

            {/* Divider Line */}
            <hr className="w-4/5 border-accent opacity-50" />
            
            <Link to="/location" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center" onClick={toggleMenu}>
              <FaMapMarkerAlt className="mr-2" /> {content.menu.location}
            </Link>
            <Link to="/contact" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center" onClick={toggleMenu}>
              <FaInfoCircle className="mr-2" /> {content.menu.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
