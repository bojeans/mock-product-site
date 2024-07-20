import React, { useState } from "react";
import "./App.css";
// components
import Products from "./components/Products";
import SortBy from "./components/sortBy";
import FilterBy from "./components/filterBy";
import SearchBy from "./components/searchBy";
// hooks
import useFetchProducts from "./hooks/useFetchProducts";
import useSortProducts from "./hooks/useSortProducts";
import useFilterProducts from "./hooks/useFilterProducts";
import useSearchProducts from "./hooks/useSearchProducts";
// types
import { ProductProps } from "./types";

const App: React.FC = () => {
  const {
    products,
    filteredProducts,
    setFilteredProducts,
    sortedProducts,
    setSortedProducts,
  } = useFetchProducts();
  const { handleSortChange } = useSortProducts(
    filteredProducts,
    setSortedProducts
  );
  const { handleFilterChange } = useFilterProducts(
    products,
    setFilteredProducts,
    setSortedProducts
  );
  const { handleSearchChange } = useSearchProducts(
    products,
    setFilteredProducts,
    setSortedProducts
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 6;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: ProductProps[] = sortedProducts.slice(
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
      <div className="feature-container">
        <div className="filter-sort">
          <SortBy handleSortChange={handleSortChange} />
          <FilterBy handleFilterChange={handleFilterChange} />
        </div>
        <SearchBy handleSearchChange={handleSearchChange} />
      </div>

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
