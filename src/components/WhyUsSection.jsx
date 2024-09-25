import { FiArrowRight } from 'react-icons/fi';
import { FaUser, FaBullseye, FaTrophy } from 'react-icons/fa'; // Icons for the points
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import whyUsBg from '../assets/whyus_bg.png';

function WhyUsSection() {
  const { content } = useLanguage();

  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${whyUsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Black overlay with 80% opacity covering 80% of the height */}
      <div className="absolute inset-0 bg-black opacity-50 h-4/5 top-28 w-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 px-4 sm:px-8 md:px-16">
        {/* Left side: Title, Subtitle, and Button */}
        <div className="bg-whyUsBg p-6 sm:p-8 md:p-10 rounded-md shadow-lg text-center lg:text-left flex flex-col justify-center">
          <h2 className="font-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {content.whyUs.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary mb-6">
            {content.whyUs.subtitle}
          </p>
          <Link
            to="/contact"
            className="uppercase inline-flex items-center justify-center rounded-sm bg-buttonBg text-white py-3 px-5 hover:bg-white hover:text-buttonBg hover:shadow-lg transition duration-300"
          >
            {content.whyUs.buttonText}
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Right side: Points with icons */}
        <div className="flex flex-col justify-center space-y-6 text-white">
          {content.whyUs.points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon for each point */}
              <div className="text-white text-3xl sm:text-4xl lg:text-5xl">
                {index === 0 && <FaUser />}
                {index === 1 && <FaBullseye />}
                {index === 2 && <FaTrophy />}
              </div>
              {/* Title and Description */}
              <div>
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold">{point.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
