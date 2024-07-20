import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";
import { ProductProps } from "../types";

const Product: React.FC<ProductProps> = ({
  id,
  title,
  category,
  image,
  description,
  price,
  rating,
}) => {
  const handleBuyClick = () => {
    // Placeholder for the buy button click event handler
    alert(`Buying ${title}`);
  };
  return (
    <Card className="Product">
      <Card.Img variant="top" src={image} className="ProductImage" />
      <Card.Body className="ProductContent">
        <Card.Title className="ProductTitle">{title}</Card.Title>
        <Card.Text className="ProductDescription">{description}</Card.Text>
        <Card.Text className="ProductCategory">Category: {category}</Card.Text>
        <Card.Text className="ProductPrice">
          Price: ${formatPrice(price)}
        </Card.Text>
        <Card.Text className="ProductRating">
          Rating: {rating.rate} ({rating.count} reviews)
        </Card.Text>
        <Button variant="primary" onClick={handleBuyClick}>
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
