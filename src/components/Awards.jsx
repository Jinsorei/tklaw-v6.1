import React, { useState, useEffect, useRef } from 'react';
import award1 from '../assets/award1.png';
import award2 from '../assets/award2.png';
import award3 from '../assets/award3.png';
import award4 from '../assets/award4.png';
import award5 from '../assets/award5.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef(null);

  // List of awards
  const awards = [
    { id: 1, image: award1 },
    { id: 2, image: award2 },
    { id: 3, image: award3 },
    { id: 4, image: award4 },
    { id: 5, image: award5 },
    { id: 6, image: award1 }, // Example of repeating for more items
    { id: 7, image: award2 },
    { id: 8, image: award3 },
    { id: 9, image: award4 },
    { id: 10, image: award5 },
  ];

  // Define how many items to show per screen size
  const itemsPerScreen = {
    sm: 1,    // Small screens: 1 item
    md: 2,    // Medium screens: 2 items
    lg: 3,    // Large screens: 3 items
    xl: 5,    // Extra large screens: 5 items
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === awards.length - itemsPerScreen.xl ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awards.length - itemsPerScreen.xl : prevIndex - 1
    );
  };

  // Auto-sliding behavior
  useEffect(() => {
    autoSlideInterval.current = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(autoSlideInterval.current); // Cleanup interval on unmount
  }, []);

  // Stop auto-slide when user interacts (optional)
  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(nextSlide, 3000);
  };

  return (
    <section className="py-8 px-4 sm:px-8 md:px-16">
      <div className="relative flex items-center">
        
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 p-2 text-white bg-gray-700 hover:bg-gray-900 rounded-full z-10 opacity-50 hover:opacity-100 transition-opacity"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Awards Slider */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsPerScreen.xl) * currentIndex}%)`,
              width: `${100 * awards.length / itemsPerScreen.xl}%`,
            }}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2"
              >
                <div className="bg-transparent p-4 h-40 flex items-center justify-center">
                  <img
                    src={award.image}
                    alt={`Award ${award.id}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 p-2 text-white bg-gray-700 hover:bg-gray-900 rounded-full z-10 opacity-50 hover:opacity-100 transition-opacity"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

export default AwardsSection;
