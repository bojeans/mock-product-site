type ProductsTypes = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
};

const Product = (props: ProductsTypes) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.category}</p>
      <img src={props.image} alt={"product"} />
      <p>{props.rating.count}</p>
      <p>{props.rating.rate}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button>Buy Now</button>
    </li>
  );
};

export default Product;
