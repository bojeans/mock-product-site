import { useState } from "react";

const useSortProducts = (
  filteredProducts: any[],
  setSortedProducts: (products: any[]) => void
) => {
  const [currentSort, setCurrentSort] = useState<string>("");

  const handleSortChange = (value: string) => {
    setCurrentSort(value);
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
  };

  return { currentSort, handleSortChange };
};

export default useSortProducts;
