import React from "react";
import { Form } from "react-bootstrap";

type SortByProps = {
  handleSortChange: (value: string) => void;
};

const SortBy = ({ handleSortChange }: SortByProps) => {
  return (
    <Form.Group controlId="sort">
      <Form.Label>Sort By:</Form.Label>
      <Form.Control
        as="select"
        onChange={(e) => handleSortChange(e.target.value)}
        className="sort-by"
      >
        <option value="lowprice">Price: Low to High</option>
        <option value="highprice">Price: High to Low</option>
        <option value="category">Category</option>
        <option value="rating">Rating</option>
      </Form.Control>
    </Form.Group>
  );
};

export default SortBy;
