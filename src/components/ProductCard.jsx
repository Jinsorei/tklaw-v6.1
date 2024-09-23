// src/components/ProductCard.jsx

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image.fields.file.url}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.price} USD</p>
        <p className={`text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        <a href={`/products/${product.slug}`} className="text-blue-500 hover:underline mt-2 block">
          View Details
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
