import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import fetchAPI from "./components/fetchAPI";
import SortBy from "./components/sortBy";
import FilterBy from "./components/filterBy";

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [sortedProducts, setSortedProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const fetchProducts = async () => {
    const data = await fetchAPI();
    setProducts(data);
    setSortedProducts(data);
  };

  const handleSortChange = (value: string) => {
    let sorted = [...sortedProducts];
    if (value === "lowprice") {
      sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    } else if (value === "highprice") {
      sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
    } else if (value === "category") {
      sorted = [...sortedProducts].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    } else if (value === "rating") {
      sorted = [...sortedProducts].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
    }
    setSortedProducts(sorted);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const updatedProducts = filter
      ? products.filter(
          (product) =>
            product.category === filter ||
            (filter === "rating" && product.rating.rate >= 4)
        )
      : products;
    setSortedProducts(updatedProducts);
  }, [filter, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app-container">
      <h1>Title - woohoo</h1>
      <div className="filter-sort">
        <SortBy handleSortChange={handleSortChange} />
        <FilterBy handleFilterChange={handleFilterChange} />
      </div>
      <div className="products-container">
        <Products products={currentProducts} />
      </div>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(sortedProducts.length / productsPerPage),
        }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
