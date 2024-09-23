import { useParams } from 'react-router-dom';
import useContentful from '../useContentful';

const ProductList = () => {
  const { category } = useParams(); // Get category from URL
  const { data, loading, error } = useContentful([
    {
      content_type: 'product',
      order: 'fields.createdAt',
    },
  ]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  // Log the data and category for debugging
  console.log("URL Category:", category);
  console.log("Fetched Data:", data);

  // Check if category matches the one in product fields (case-insensitive)
  const filteredProducts = data?.items?.filter((product) => {
    const productCategory = product.fields.category || "";
    console.log("Product Category:", productCategory); // Log category for each product
    return productCategory.toLowerCase() === category.toLowerCase();
  }) || [];

  return (
    <div>
      <h1 className="mt-40">{category} Products</h1>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.sys.id}>
              <div>
                <h2>{product.fields.name}</h2>
                <p>{product.fields.description?.content[0]?.content[0]?.value || 'No description available'}</p>
                <p>Price: ${product.fields.price}</p>
                <p>In Stock: {product.fields.inStock ? 'Yes' : 'No'}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
