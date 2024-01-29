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
  alert(
    "this button works, however this shop is not live :) If you are using this codebase and are curious, would suggest researching a payment gateway such as Stripe API."
  );
};

const Product = (props: ProductsTypes) => {
  const formattedPrice = props.price.toFixed(2);
  return (
    <li className="Product">
      <h2>{props.title}</h2>
      <p className="ProductCategory">Category: {props.category}</p>
      <div className="ProductContent">
        <img src={props.image} alt="product" className="ProductImage" />
        <div className="ProductDetails">
          <p>{props.rating.count} in stock</p>
          <p>{props.rating.rate}/5</p>
          <p>{props.description}</p>
          <p>${formattedPrice}</p>
          <button onClick={onClick}>Buy Now</button>
        </div>
      </div>
    </li>
  );
};

export default Product;
