import { useState } from 'react';
import { Link } from 'react-router-dom';

const attorneys = [
  { name: 'Nguyễn Văn A', title: 'Luật sư thành viên', image: '/attorney01.png' },
  { name: 'Trần Thị B', title: 'Luật sư chính', image: '/attorney02.png' },
  { name: 'Lê Hoàng C', title: 'Luật sư tư vấn', image: '/attorney03.png' },
  // Add more attorneys as needed
];



function Attorneys() {
    const [loadingImages, setLoadingImages] = useState(new Array(attorneys.length).fill(true));
  
    const handleImageLoad = (index) => {
      const updatedLoadingImages = [...loadingImages];
      updatedLoadingImages[index] = false;
      setLoadingImages(updatedLoadingImages);
    };
  
    return (
        <section className="py-16 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-h2 font-bold mb-4">Đội Ngũ Luật Sư</h2>
            <p className="mb-8 text-text">
              Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, chúng tôi cam kết cung cấp những giải pháp pháp lý tốt nhất cho khách hàng.
            </p>
            <Link
              to="/attorneys"
              className="inline-block bg-primary text-white py-2 px-6 rounded shadow hover:bg-accent transition-colors"
            >
              Tìm hiểu thêm
            </Link>
          </div>
    
          {/* Carousel of Cards */}
          <div className="mt-12 overflow-x-auto no-scrollbar">
            <div className="flex space-x-4 md:space-x-6 lg:space-x-8 px-4 md:px-0">
              {attorneys.map((attorney, index) => (
                <div key={index} className="relative w-64 flex-shrink-0 md:w-80 lg:w-96">
                  {/* Placeholder while loading */}
                  {loadingImages[index] && (
                    <div className="w-full h-80 md:h-96 bg-gray-200 animate-pulse rounded-lg"></div>
                  )}
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className={`w-full h-80 md:h-96 object-cover rounded-lg shadow-md ${loadingImages[index] ? 'hidden' : 'block'}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
                    <p className="text-white font-bold text-lg">{attorney.name}</p>
                    <p className="text-white">{attorney.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    export default Attorneys;