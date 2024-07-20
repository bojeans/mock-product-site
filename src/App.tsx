import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import fetchAPI from "./components/fetchAPI";
import SortBy from "./components/sortBy";
import FilterBy from "./components/filterBy";
import SearchBy from "./components/searchBy";

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [sortedProducts, setSortedProducts] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const fetchProducts = async () => {
    const data = await fetchAPI();
    setProducts(data);
    setFilteredProducts(data);
    setSortedProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSortChange = (value: string) => {
    let sorted = [...filteredProducts];
    if (value === "lowprice") {
      sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (value === "highprice") {
      sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (value === "category") {
      sorted = [...filteredProducts].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    } else if (value === "rating") {
      sorted = [...filteredProducts].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
    }
    setSortedProducts(sorted);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    if (filter === "rating" && value !== "rating") {
      setFilteredProducts(products);
      setSortedProducts(products);
    } else if (value === "rating") {
      const updatedProducts = products.filter(
        (product) => product.rating.rate >= 4
      );
      setFilteredProducts(updatedProducts);
      setSortedProducts(updatedProducts);
    } else {
      const updatedProducts = products.filter(
        (product) => product.category === value
      );
      setFilteredProducts(updatedProducts);
      setSortedProducts(updatedProducts);
    }
    setFilter(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value === "") {
      setFilteredProducts(products);
      setSortedProducts(products);
    } else {
      const updatedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(updatedProducts);
      setSortedProducts(updatedProducts);
    }
    setCurrentPage(1);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="app-container">
      <h1 className="main-title">Mock Shop for Coding Demonstration</h1>
      <span className="disclaimer-description">
        *Product information fetched from{" "}
        <a
          href="https://fakestoreapi.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          FakeStoreAPI
        </a>
        . Here's a link to my{" "}
        <a
          href="https://github.com/bojeans/mock-product-site"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo
        </a>
      </span>
      <div className="filter-sort">
        <SortBy handleSortChange={handleSortChange} />
        <FilterBy handleFilterChange={handleFilterChange} />
      </div>

      <SearchBy handleSearchChange={handleSearchChange} />

      <div>
        <Products products={currentProducts} />
      </div>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({
          length: Math.ceil(sortedProducts.length / productsPerPage),
        }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(sortedProducts.length / productsPerPage)
          }
        >
          {">"}
        </button>
      </div>
      <div className="pagination-info">
        <p>
          Page {currentPage} of{" "}
          {Math.ceil(sortedProducts.length / productsPerPage)}
        </p>
      </div>
    </div>
  );
};

export default App;
