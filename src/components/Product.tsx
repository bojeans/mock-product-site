import React from "react";
import "../App.css";

type ProductProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

const Product = ({
  id,
  title,
  category,
  image,
  description,
  price,
  rating,
}: ProductProps) => {
  return (
    <div className="Product">
      <img src={image} alt={title} className="ProductImage" />
      <div className="ProductContent">
        <h2>{title}</h2>
        <p className="text-truncate">{description}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </div>
    </div>
  );
};

export default Product;
