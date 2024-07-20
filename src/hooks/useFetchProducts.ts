import { useState, useEffect } from "react";
import fetchAPI from "../components/fetchAPI";
import { ProductProps } from "../types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [sortedProducts, setSortedProducts] = useState<ProductProps[]>([]);

  const fetchProducts = async () => {
    const data: ProductProps[] = await fetchAPI();
    setProducts(data);
    setFilteredProducts(data);
    setSortedProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    filteredProducts,
    setFilteredProducts,
    sortedProducts,
    setSortedProducts,
  };
};

export default useFetchProducts;
