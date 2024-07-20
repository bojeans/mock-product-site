import React, { useState } from "react";
import { ProductProps } from "../types";

const useFilterProducts = (
  products: ProductProps[],
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>,
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
) => {
  const handleFilterChange = (value: string) => {
    if (value !== "rating") {
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
  };

  return { handleFilterChange };
};

export default useFilterProducts;
