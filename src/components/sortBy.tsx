import React from "react";
import { Form } from "react-bootstrap";

type SortByProps = {
  handleSortChange: (value: string) => void;
};

const SortBy = ({ handleSortChange }: SortByProps) => {
  return (
    <Form.Control
      as="select"
      onChange={(e) => handleSortChange(e.target.value)}
      className="sort-by"
    >
      <option value="">Sort by</option>
      <option value="lowprice">Price: Low to High</option>
      <option value="highprice">Price: High to Low</option>
      <option value="category">Category</option>
      <option value="rating">Rating</option>
    </Form.Control>
  );
};

export default SortBy;
