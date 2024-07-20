import { useState } from "react";
import { ProductProps } from "../types";

const useSearchProducts = (
  products: ProductProps[],
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>,
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
) => {
  const handleSearchChange = (value: string) => {
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
  };

  return { handleSearchChange };
};

export default useSearchProducts;
