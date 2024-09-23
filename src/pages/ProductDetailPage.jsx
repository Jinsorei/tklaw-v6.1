// src/pages/ProductDetailPage.jsx
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Detail for {id}</h1>
      {/* Product details here */}
    </div>
  );
}

export default ProductDetailPage;
