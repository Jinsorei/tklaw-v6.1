// src/components/Card.jsx
function Card({ image, title, description }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-1.25rem">
        <img src={image} alt={title} className="w-full h-10rem object-cover rounded-t-lg" />
        <div className="p-1.25rem">
          <h3 className="text-lg font-semibold mb-0.5rem">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  