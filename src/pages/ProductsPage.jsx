import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useContentful from '../useContentful';

function ProductsPage() {
  const { data, loading, error } = useContentful([
    {
      content_type: 'product',
      order: 'fields.createdAt',
    },
  ]);

  const products = data?.product || [];
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const productsPerPage = 15;

  // Get the current page from query params or default to 1
  const currentPage = Number(searchParams.get('page')) || 1;

  // Debounce the search input by updating debouncedSearchQuery after 300ms of no typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Extract unique categories from the product list
  const categories = useMemo(() => {
    const allCategories = products.map((product) => product.fields.category);
    return ['All', ...new Set(allCategories)];
  }, [products]);

  // Define price ranges
  const priceRanges = useMemo(() => [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $500', min: 0, max: 500 },
    { label: '$500-$1000', min: 500, max: 1000 },
    { label: '$1000-$1500', min: 1000, max: 1500 },
    { label: '$1500-$2000', min: 1500, max: 2000 },
    { label: '$2000 and Up', min: 2000, max: Infinity },
  ], []);

  // Function to filter products based on search query and category
  const filterBySearchAndCategory = (products) => {
    const searchTerm = debouncedSearchQuery.toLowerCase();
    return products.filter((product) => {
      const { name, description, category } = product.fields;

      const matchesSearch =
        name.toLowerCase().includes(searchTerm) ||
        description?.content.some((block) =>
          block.content.some((text) => text.value.toLowerCase().includes(searchTerm))
        );

      const matchesCategory = selectedCategory === 'All' || category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  };

  // Function to filter products based on price range
  const filterByPriceRange = (products) => {
    const { min, max } = priceRanges.find(r => r.label === selectedPriceRange) || { min: 0, max: Infinity };
    return products.filter((product) => {
      const { price } = product.fields;
      return price >= min && price <= max;
    });
  };

  // Memoize the filtered products based on the search query, category, and price range
  const filteredProducts = useMemo(() => {
    const productsAfterSearchAndCategory = filterBySearchAndCategory(products);
    return filterByPriceRange(productsAfterSearchAndCategory);
  }, [debouncedSearchQuery, selectedCategory, selectedPriceRange, products]);

  // Memoize the current products to avoid recalculating on every render
  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, filteredProducts]);

  // Calculate total pages
  const totalPages = useMemo(() => Math.ceil(filteredProducts.length / productsPerPage), [filteredProducts]);

  // Ensure that page number is valid and does not go out of bounds
  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      setSearchParams({ page: 1 });
    }
  }, [currentPage, totalPages, setSearchParams]);

  // Memoize the search input change handler
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Handle price range selection
  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div className="max-w-container-desktop mx-auto  mt-40 px-4 m-section-margin flex flex-col md:flex-row">
      {/* Filters and Search */}
      <div className="w-full md:w-1/4 md:pr-4 mb-6 md:mb-0 ">
        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full p-3 text-body border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
  
        {/* Category filters */}
        <div className="mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`block w-full text-left px-4 py-2 border rounded-md mb-2 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
  
        {/* Price range filter */}
        <div className="mb-6">
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="w-full p-3 text-body border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Sort by price</option>
            <option value="Under $500">Under $500</option>
            <option value="$500-$1000">$500-$1000</option>
            <option value="$1000-$1500">$1000-$1500</option>
            <option value="$1500-$2000">$1500-$2000</option>
            <option value="$2000 and Up">$2000 and Up</option>
          </select>
        </div>
      </div>
  
      {/* Product grid */}
      <div className="w-full md:w-3/4">
        <h1 className="text-h1 font-primary mb-6 text-center md:text-left">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <Link key={product.fields.slug} to={`/products/${product.fields.slug}`} className="block">
              <div className="border p-4 rounded-md">
                <img src={product.fields.image.fields.file.url} alt={product.fields.name} className="w-full h-64 object-cover rounded-md" />
                <h2 className="mt-4 text-lg font-bold">{product.fields.name}</h2>
                <p className="text-gray-600">${product.fields.price}</p>
                {product.fields.inStock ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </div>
            </Link>
          ))}
        </div>
  
        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setSearchParams({ page: index + 1 })}
              className={`px-4 py-2 border rounded-md ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border-primary'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default ProductsPage;
