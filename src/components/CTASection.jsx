import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';

function CallToAction() {
    const { content } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent text-white text-center relative">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 container mx-auto">
        <h2 className="text-h2 font-bold mb-4 text-white drop-shadow-md">
          {content.CTASection.heading}
        </h2>
        <p className="mb-8 text-lg md:text-xl leading-relaxed drop-shadow-md">
        {content.CTASection.description}
        </p>
        <Link
          to="tel:+8422221697" // Update with your actual hotline number
          className="inline-block bg-accent text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-80 transition-colors duration-300 transform hover:scale-105"
        >
          <span className="font-bold text-lg">{content.CTASection.buttonText}</span>
        </Link>
        <p className="mt-4 text-sm">
        {content.CTASection.subText}
        </p>
      </div>
    </section>
  );
}

export default CallToAction;
