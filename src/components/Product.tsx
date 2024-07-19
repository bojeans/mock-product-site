import React from "react";
import { Card } from "react-bootstrap";

type ProductProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
};

const Product: React.FC<ProductProps> = ({
  id,
  title,
  category,
  image,
  description,
  price,
  rating,
}) => {
  return (
    <Card className="Product">
      <Card.Img variant="top" src={image} className="ProductImage" />
      <Card.Body className="ProductContent">
        <Card.Title className="ProductTitle">{title}</Card.Title>
        <Card.Text className="ProductDescription">{description}</Card.Text>
        <Card.Text className="ProductCategory">Category: {category}</Card.Text>
        <Card.Text className="ProductPrice">Price: ${price}</Card.Text>
        <Card.Text className="ProductRating">
          Rating: {rating.rate} ({rating.count} reviews)
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
