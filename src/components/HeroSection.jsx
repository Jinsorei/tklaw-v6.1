import { Link } from 'react-router-dom';
import { FiArrowRight} from 'react-icons/fi';
import { useLanguage } from './LanguageProvider';

function HeroSection({ title, subtitle, backgroundImage }) {
  const { content } = useLanguage();

  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 mt-16 md:mt-24 lg:mt-32"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay to prevent too much contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8 text-slate-50 drop-shadow-md">
          {content.hero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 lg:mb-12 text-slate-100 drop-shadow-md">
          {content.hero.subtitle}
        </p>
        
        {/* CTA Button */}
        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-white font-bold py-2 px-4 rounded-md border-2 border-white shadow hover:bg-accent transition duration-300">
          {content.cta.buttonText}
          <FiArrowRight className="ml-2" />
        </Link>

      </div>
    </section>
  );
}

export default HeroSection;
