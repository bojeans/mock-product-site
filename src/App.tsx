import { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import fetchAPI from "./components/fetchAPI";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchAPI();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Mock shop for demonstration</h1>
      <Products products={products} />
    </div>
  );
};

export default App;
