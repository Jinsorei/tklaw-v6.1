import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import practice01 from '../assets/practice01.webp';
import practice02 from '../assets/practice02.webp';
import practice03 from '../assets/practice03.webp';

const practiceImages = {
  practice01: practice01,
  practice02: practice02,
  practice03: practice03,
};

function Practices() {
  const { content } = useLanguage();
  const { practicesSection } = content;
  const { heading, practices } = practicesSection; // Destructure practices

  const [selectedPractice, setSelectedPractice] = useState(0);

  return (
    <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-10 bg-background relative z-10">
      <h1 className="text-h1 font-bold mb-6 text-center">{heading}</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-4">
        {practices.map((practice, index) => (
          <button
            key={practice.name}
            onClick={() => setSelectedPractice(index)}
            className={`flex-1 sm:flex-none text-left bg-accent text-white font-bold py-2 px-4 rounded shadow hover:bg-primary transition duration-300 ${selectedPractice === index ? 'bg-primary' : ''} text-sm sm:text-base`}
          >
            {practice.name}
          </button>
        ))}
      </div>
      <h2 className="text-center text-h2 font-bold mb-2 text-lg sm:text-h2">
        {practices[selectedPractice].name}
      </h2>
      <p className="py-4 rounded text-text mb-4">
        {practices[selectedPractice].description}
      </p>
      <ul className="list-disc pl-5 mt-4 mb-4">
        {practices[selectedPractice].services.map((service) => (
          <li key={service} className="text-text">{service}</li>
        ))}
      </ul>
      <Link to={`#${practices[selectedPractice].name}`} className="text-primary font-bold hover:underline">
        Xem thêm 
      </Link>
      
      {/* <div className="mt-4 relative w-full h-60 md:h-64 lg:h-80">
        <img
          src={practiceImages[practices[selectedPractice].image]}
          alt={practices[selectedPractice].name}
          className="w-full h-full object-cover rounded-md"
        />
      </div> */}
    </div>
  );
}

export default Practices;
