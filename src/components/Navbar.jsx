import { useState } from 'react';
import { FaBars, FaTimes, FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-primary shadow-none fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out">
      <div className="container mx-auto px-6 py-4">
        
        {/* Logo, Hotline, and Mobile Menu Button */}
        <div className="flex items-center justify-between">
          {/* Logo aligned to the left */}
          
          <div className="block sm:hidden">
            <Link to="/">
              <img src="/logo.png" alt="TK & Associates Logo" className="h-9 w-auto max-w-full border border-primary rounded" />
            </Link>
          </div>
          <div className="hidden sm:block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition-transform duration-1000 ease-in-out">
            <Link to="/" className="text-primary hover:text-accent transition duration-300">TK & Associates</Link>
          </div>

          {/* Hotline and Mobile Menu - on the same line as logo */}
          <div className="flex items-center space-x-6">
            
            {/* Hotline for large screens */}
            <a href="tel:+1234567890" className="flex items-center">
              <div className="hidden md:flex items-center text-primary">
                {/* Phone icon inside a circle */}
                <div className="flex items-center justify-center rounded-full bg-accent p-3">
                  <FaPhoneAlt className="text-white text-lg lg:text-xl" />
                </div>

                {/* Block with hotline text and number */}
                <div className="flex flex-col ml-3">
                  <span className="text-base lg:text-lg font-bold">Hotline</span>
                  <span className="text-lg lg:text-xl font-bold">+84 2 222 1697</span>
                </div>
              </div>
            </a>
            

            {/* Mobile Menu Button and Hotline for small screens */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Hotline icon and text for mobile */}
              <a href="tel:+1234567890" className="flex items-center">
                <div className="flex items-center text-primary">
                  <div className="flex items-center justify-center rounded-full bg-accent p-2">
                    <FaPhoneAlt className="text-white text-sm" />
                  </div>
                  <span className="ml-2 font-bold">Hotline</span>
                </div>
              </a>
              

              {/* Mobile Menu Button */}
              <button onClick={toggleMenu} className="focus:outline-none transition-transform delay-150 duration-1000 transform hover:scale-110 text-primary">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Links - Aligned on a new line on large screens */}
        <div className="hidden md:flex w-full justify-between items-center mt-6 lg:mt-8">
          {/* Left-aligned links (About, Practices, Blog) */}
          <div className="flex space-x-6">
            <Link to="/about" className="text-primary hover:text-accent transition duration-300 font-bold">Về chúng tôi</Link>
            <Link to="/practices" className="text-primary hover:text-accent transition duration-300 font-bold">Lĩnh vực hoạt động</Link>
            <Link to="/blog" className="text-primary hover:text-accent transition duration-300 font-bold">Bài viết</Link>
          </div>

          {/* Right-aligned links (Location, Contact) */}
          <div className="flex space-x-6">
            <Link to="/location" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Địa chỉ
            </Link>
            <Link to="/contact" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center">
              <FaInfoCircle className="mr-2" /> Liên hệ
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
            <Link to="/about" className="text-primary hover:text-accent transition duration-300 font-bold" onClick={toggleMenu}>Về chúng tôi</Link>
            <Link to="/practices" className="text-primary hover:text-accent transition duration-300 font-bold" onClick={toggleMenu}>Lĩnh vực hoạt động</Link>
            <Link to="/blog" className="text-primary hover:text-accent transition duration-300 font-bold" onClick={toggleMenu}>Bài viết</Link>

            {/* Divider Line */}
            <hr className="w-4/5 border-accent opacity-50" />
            
            <Link to="/location" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center" onClick={toggleMenu}>
              <FaMapMarkerAlt className="mr-2" /> Địa chỉ
            </Link>
            <Link to="/contact" className="text-primary hover:text-accent transition duration-300 font-bold flex items-center" onClick={toggleMenu}>
              <FaInfoCircle className="mr-2" /> Liên hệ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
