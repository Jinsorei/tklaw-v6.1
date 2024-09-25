import { Link } from 'react-router-dom';
import attorney01 from '../assets/attorney01.png';
import attorney02 from '../assets/attorney02.png';
import attorney03 from '../assets/attorney03.png';
import { useLanguage } from './LanguageProvider'; // Assuming useLanguage is your context for content

// Map the image files to the corresponding file paths
const attorneyImages = {
  attorney01: attorney01,
  attorney02: attorney02,
  attorney03: attorney03,
};

function Attorneys() {
  const { content } = useLanguage(); // Access content like attorneysSection
  const { attorneysSection } = content; 

  return (
          <section className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-10 -mt-12 rounded-t-2xl bg-background border shadow-md relative z-10">

      <div className="container mx-auto text-center">
        {/* Dynamic heading and description */}
        <h2 className="text-h2 font-bold mb-4">{attorneysSection.heading}</h2>
        <p className="mb-8 text-text">{attorneysSection.description}</p>
        <Link
          to="/attorneys"
          className="inline-block bg-primary text-white py-2 px-6 rounded shadow hover:bg-accent transition-colors"
        >
          {attorneysSection.buttonText} {/* Dynamic button text */}
        </Link>
      </div>

      {/* Carousel of Attorney Cards */}
      <div className="mt-12 overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 px-4 md:px-0">
          {attorneysSection.attorneys.map((attorney, index) => (
            <div key={index} className="relative w-64 flex-shrink-0 md:w-80 lg:w-96">
              <img
                src={attorneyImages[attorney.image]} // Directly using the image source
                alt={attorney.name}
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
                <p className="text-white font-bold text-lg">{attorney.name}</p> {/* Dynamic attorney name */}
                <p className="text-white">{attorney.title}</p> {/* Dynamic attorney title */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Attorneys;
