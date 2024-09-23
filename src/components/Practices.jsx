import { useState } from 'react';
import { Link } from 'react-router-dom';
import practice01 from '../assets/practice01.webp';
import practice02 from '../assets/practice02.webp';
import practice03 from '../assets/practice03.webp';

const practices = [
  {
    title: 'Tư vấn luật',
    description: 'Chúng tôi cung cấp dịch vụ tư vấn pháp lý chất lượng cao, giúp khách hàng giải quyết các vấn đề pháp lý một cách hiệu quả.',
    services: ['Dịch vụ tư vấn doanh nghiệp', 'Tư vấn đầu tư', 'Tư vấn hợp đồng'],
    image: practice01, 
  },
  {
    title: 'Tham gia tố tụng',
    description: 'Chúng tôi hỗ trợ khách hàng tham gia tố tụng, bảo vệ quyền lợi hợp pháp của họ trước tòa án.',
    services: ['Bảo vệ quyền lợi tại tòa án', 'Đại diện pháp lý', 'Tư vấn hồ sơ tố tụng'],
    image: practice02, 
  },
  {
    title: 'Dịch vụ pháp lý',
    description: 'Chúng tôi cung cấp dịch vụ pháp lý đa dạng, từ soạn thảo hợp đồng đến tư vấn pháp luật cho doanh nghiệp.',
    services: ['Soạn thảo hợp đồng', 'Tư vấn pháp luật cho doanh nghiệp', 'Đăng ký doanh nghiệp'],
    image: practice03, 
  },
];

function Practices() {
  const [selectedPractice, setSelectedPractice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = (index) => {
    setSelectedPractice(index);
    setIsLoading(true); // Reset loading state on practice change
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when the image is loaded
  };

  return (
    <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-10 -mt-12 rounded-t-2xl bg-background relative z-10">
      <h1 className="text-h1 font-bold mb-6 text-center">Lĩnh vực hoạt động</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-4">
        {practices.map((practice, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`flex-1 sm:flex-none text-left bg-accent text-white font-bold py-2 px-4 rounded shadow hover:bg-primary transition duration-300 ${selectedPractice === index ? 'bg-primary' : ''} text-sm sm:text-base`}
          >
            {practice.title}
          </button>
        ))}
      </div>
      <h2 className="text-center text-h2 font-bold mb-2 text-lg sm:text-h2">
        {practices[selectedPractice].title}
      </h2>
      <p className="py-4 rounded text-text mb-4">
        {practices[selectedPractice].description}
      </p>
      <ul className="list-disc pl-5 mt-4 mb-4">
        {practices[selectedPractice].services.map((service, index) => (
          <li key={index} className="text-text">{service}</li>
        ))}
      </ul>
      <Link to={`#${practices[selectedPractice].title}`} className="text-primary font-bold hover:underline">
        Xem thêm 
      </Link>
      
      {/* Image Section */}
      <div className="mt-4 relative w-full h-60 md:h-64 lg:h-80">
        {isLoading && (
          <div className="h-64 bg-gray-200 animate-pulse rounded-md"></div> // Placeholder
        )}
        <img
          src={practices[selectedPractice].image}
          alt={practices[selectedPractice].title}
          className={`w-full h-full object-cover rounded-md ${isLoading ? 'hidden' : 'block'}`}
          loading="lazy" // Lazy load image
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

export default Practices;
