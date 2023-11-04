const fetchAPI = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const result = await res.json();
  return result;
};

export default fetchAPI;
