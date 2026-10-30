import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data/products.jsx";
import ProductCard from "../components/ProductCard.jsx";

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "All";

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategory = (category) => {
    const params = {};

    if (searchQuery) params.search = searchQuery;
    if (category !== "All") params.category = category;

    setSearchParams(params);
  };

  return (
    <section className="container products-page">
      <div className="products-page-heading">
        <span className="section-label">MEDIHUB COLLECTION</span>
        <h1>Our Products</h1>
        <p>Find everyday healthcare essentials in one place.</p>
      </div>

      <div className="product-filter">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {searchQuery && (
        <p className="search-result-text">
          Results for: <strong>{searchQuery}</strong>
        </p>
      )}

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <i className="bi bi-search"></i>
          <h2>No products found</h2>
          <p>Try another product name or category.</p>
          <button
            type="button"
            className="shop-btn"
            onClick={() => setSearchParams({})}
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}

export default Product;