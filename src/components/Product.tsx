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

const onClick = () => {
  alert("this button works, however this shop is not live :)");
};

const Product = (props: ProductsTypes) => {
  return (
    <li className="Product">
      <h2>{props.title}</h2>
      <p className="ProductCategory">Category: {props.category}</p>
      <div className="ProductContent">
        <img src={props.image} alt="product" className="ProductImage" />
        <div className="ProductDetails">
          <p>{props.rating.count}</p>
          <p>{props.rating.rate}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
          <button onClick={onClick}>Buy Now</button>
        </div>
      </div>
    </li>
  );
};

export default Product;
