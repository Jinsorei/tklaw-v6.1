// src/components/Carousel.jsx
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel({ items, title }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollContainer = (scrollOffset) => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <section className="relative py-section-margin flex justify-center">
  <div className="max-w-container-desktop w-full">
    <h2 className="text-h1 font-bold font-primary mb-4 text-center">{title}</h2>
    <div className="relative">
      <div
        id="carousel-container"
        className="overflow-x-auto flex space-x-4 scroll-smooth"
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.sys.id}
              className="w-64 bg-secondary p-card-padding rounded-lg shadow-lg flex-shrink-0"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg mb-4"
                src={item.fields.image.fields.file.url}
                alt={item.fields.title}
              />
              <h3 className="text-h3 font-primary mb-2">{item.fields.title}</h3>
              <p className="text-body font-secondary mb-2">
                {item.fields.description.content[0].content.map((c) => c.value).join(' ')}
              </p>
              <p className="font-semibold text-h3 mb-2">Price: ${item.fields.price}</p>
              <a href={`/products/${item.fields.slug}`} className="text-accent hover:underline">
                View Details
              </a>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
      <button
        onClick={() => scrollContainer(-300)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400/65 text-white p-button-padding rounded-full hover:bg-gray-800/50"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scrollContainer(300)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400/65 text-white p-button-padding rounded-full hover:bg-gray-800/50"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>


  );
}

export default Carousel;
