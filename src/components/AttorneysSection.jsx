
import attorney01 from '../assets/attorney01.png';
import attorney02 from '../assets/attorney02.png';
import attorney03 from '../assets/attorney03.png';

// Sample attorney data with imported images
const attorneys = [
  {
    name: 'John Doe',
    title: 'Senior Partner',
    image: attorney01,
  },
  {
    name: 'Jane Smith',
    title: 'Associate Attorney',
    image: attorney02,
  },
  {
    name: 'Michael Brown',
    title: 'Legal Counsel',
    image: attorney03,
  },
];

const AttorneysSection = () => {
  return (
    <section className="bg-background py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {attorneys.map((attorney, index) => (
          <div key={index} className="relative group overflow-hidden rounded shadow-md">
            {/* Attorney Image with Light Grey Background */}
            <div className="bg-photoBg w-full h-120">
              <img 
                src={attorney.image} 
                alt={`${attorney.name}`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
            </div>

            {/* Name and Title with Black Background and Opacity */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-4 transition-opacity duration-300 group-hover:bg-opacity-80">
              <h3 className="font-bold text-lg text-white">{attorney.name}</h3>
              <p className="text-sm">{attorney.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AttorneysSection;
