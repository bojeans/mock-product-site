import React from "react";
import { Form } from "react-bootstrap";

type SearchByProps = {
  handleSearchChange: (value: string) => void;
};

const SearchBy = ({ handleSearchChange }: SearchByProps) => {
  return (
    <Form.Control
      type="text"
      placeholder="Search..."
      className="search-box"
      onChange={(e) => handleSearchChange(e.target.value)}
    />
  );
};

export default SearchBy;
