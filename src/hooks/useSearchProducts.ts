import { useState } from "react";

const useSearchProducts = (
  products: any[],
  setFilteredProducts: (products: any[]) => void,
  setSortedProducts: (products: any[]) => void
) => {
  const [search, setSearch] = useState<string>("");

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
  };

  return { search, handleSearchChange };
};

export default useSearchProducts;
