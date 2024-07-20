import { useState } from "react";

const useFilterProducts = (
  products: any[],
  setFilteredProducts: (products: any[]) => void,
  setSortedProducts: (products: any[]) => void
) => {
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleFilterChange = (value: string) => {
    setCurrentFilter(value);
    if (currentFilter === "rating" && value !== "rating") {
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

  return { currentFilter, handleFilterChange };
};

export default useFilterProducts;
