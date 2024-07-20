import { useState, useEffect } from "react";
import fetchAPI from "../components/fetchAPI";

const useFetchProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [sortedProducts, setSortedProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const data = await fetchAPI();
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
