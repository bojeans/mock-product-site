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

  // Sort by price, category, or rating
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

  // Filter by rating or category
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

  // Search by product name
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

  // Pagination
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
      <h1>Mock Shop for coding demonstration. </h1>
      <span>
        *product information fetched from{" "}
        <a
          href="https://fakestoreapi.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          fakestoreAPI
        </a>{" "}
        Here's a link to my{" "}
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
        <SearchBy handleSearchChange={handleSearchChange} />
      </div>
      <div className="products-container">
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
      <p>
        Page {currentPage} of{" "}
        {Math.ceil(sortedProducts.length / productsPerPage)}
      </p>
    </div>
  );
};

export default App;
