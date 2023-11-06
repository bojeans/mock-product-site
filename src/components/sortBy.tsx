import React from "react";

type SortByProps = {
  handleSortChange: (value: string) => void;
};

const SortBy: React.FC<SortByProps> = ({ handleSortChange }) => {
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSortChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSort}>
        <option value="lowprice">Low Price</option>
        <option value="highprice">High Price</option>
        <option value="category">Category</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortBy;
