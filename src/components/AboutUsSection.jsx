import { FaGavel, FaBalanceScale, FaRegBuilding, FaHandHoldingUsd } from 'react-icons/fa'; 
import sealImage from '../assets/hcmbar.png'; 
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider'; 

// Function to slugify practice names
const slugify = (text) => {
  return text
    .normalize('NFD') // Normalize the string into decomposed form
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents)
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    // .replace(/[^a-z0-9\-]/g, ''); // Remove any remaining non-Latin characters
};

const AboutUsSection = () => {
  const { content } = useLanguage(); 

  const {
    title,
    description,
    buttonText,
    practice1,
    subtitle1,
    practice2,
    subtitle2,
    practice3,
    subtitle3,
    practice4,
    subtitle4,
  } = content.aboutOurFirmSection;

  return (
    <section id="about-section" className="bg-transparent py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Right Column: Firm's Intro (appears first on mobile) */}
        <div className="relative p-8 rounded-lg order-1 sm:order-2">
          {/* Grayed out background image */}
          <img 
            src={sealImage} 
            alt="HCM Bar Association Seal" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10">
            <h1 className="capitalize font-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-primary">
              {title}
            </h1>
            <p className="text-body text-muted mb-6">
              {description}
            </p>
            <Link to="/contact" className="uppercase inline-flex items-center justify-center rounded-sm bg-buttonBg text-white py-3 px-5 hover:bg-white hover:text-buttonBg hover:shadow-lg transition duration-300"
            >
              {buttonText}
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Left Column: 6 Boxes for Areas of Law */}
        <div className="grid grid-cols-2 gap-6 order-2 sm:order-1">
          {/* Area of Law 1 */}
          <Link to={`/practice-area/${slugify(practice1)}`} className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
            <FaGavel className="text-primary text-4xl mb-2" />
            <h3 className="text-primary font-bold">{practice1}</h3>
            <p className="text-muted">{subtitle1}</p>
          </Link>
          
          {/* Area of Law 2 */}
          <Link to={`/practice-area/${slugify(practice2)}`} className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
            <FaBalanceScale className="text-primary text-4xl mb-2" />
            <h3 className="text-primary font-bold">{practice2}</h3>
            <p className="text-muted">{subtitle2}</p>
          </Link>
          
          {/* Area of Law 3 */}
          <Link to={`/practice-area/${slugify(practice3)}`} className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
            <FaRegBuilding className="text-primary text-4xl mb-2" />
            <h3 className="text-primary font-bold">{practice3}</h3>
            <p className="text-muted">{subtitle3}</p>
          </Link>
          
          {/* Area of Law 4 */}
          <Link to={`/practice-area/${slugify(practice4)}`} className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
            <FaHandHoldingUsd className="text-primary text-4xl mb-2" />
            <h3 className="text-primary font-bold">{practice4}</h3>
            <p className="text-muted">{subtitle4}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
