import React from "react";
import { Form } from "react-bootstrap";

type FilterByProps = {
  handleFilterChange: (value: string) => void;
};

const FilterBy: React.FC<FilterByProps> = ({ handleFilterChange }) => {
  const handleFilter = (e: React.ChangeEvent<any>) => {
    handleFilterChange(e.target.value);
  };

  return (
    <Form.Group controlId="filter">
      <Form.Label>Filter By:</Form.Label>
      <Form.Control as="select" onChange={handleFilter} className="filter-by">
        <option value="category">Category</option>
        <option value="rating">Rating 4 or higher</option>
      </Form.Control>
    </Form.Group>
  );
};

export default FilterBy;
