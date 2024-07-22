import React from "react";
import { Form } from "react-bootstrap";

type SearchByProps = {
  handleSearchChange: (value: string) => void;
};

const SearchBy = ({ handleSearchChange }: SearchByProps) => {
  return (
    <>
      <Form.Label htmlFor="searchBox" className="visually-hidden">
        Search
      </Form.Label>
      <Form.Control
        id="searchBox"
        type="text"
        placeholder="Search..."
        className="search-box"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </>
  );
};

export default SearchBy;
