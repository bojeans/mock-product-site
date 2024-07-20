import React, { useState } from "react";
import { ProductProps } from "../types";

const useSortProducts = (
  filteredProducts: ProductProps[],
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
) => {
  const handleSortChange = (value: string) => {
    let sorted = [...filteredProducts];
    if (value === "lowprice") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (value === "highprice") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    } else if (value === "category") {
      sorted = sorted.sort((a, b) => a.category.localeCompare(b.category));
    } else if (value === "rating") {
      sorted = sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setSortedProducts(sorted);
  };

  return { handleSortChange };
};

export default useSortProducts;
