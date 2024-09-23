
import useContentful from '../useContentful';

const ProductList = () => {
  const { data, loading, error } = useContentful([
    {
      content_type: 'product',
      order: 'fields.createdAt',
    },
  ]);

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  // Ensure data.items is defined and is an array
  const products = data?.items || [];

  return (
    <div className="mt-60">
      {products.length > 0 ? (
        products.map(product => {
          // Ensure that product.fields and product.fields.category are defined
          const productName = product.fields?.name || 'No name';
          const productDescription = product.fields?.description || 'No description';
          const productCategory = product.fields?.category || 'No category';

          return (
            <div key={product.sys.id} className="mt-60">
              <h2>{productName}</h2>
              <p>{productDescription}</p>
              <p>Category: {productCategory}</p>
              {/* Render other product details */}
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
