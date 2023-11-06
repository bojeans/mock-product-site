import React from "react";

type FilterByProps = {
  handleFilterChange: (value: string) => void;
};

const FilterBy: React.FC<FilterByProps> = ({ handleFilterChange }) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleFilterChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter By:</label>
      <select id="filter" onChange={handleFilter}>
        <option value="category">Category</option>
        <option value="rating">Rating 4 or higher</option>
      </select>
    </div>
  );
};

export default FilterBy;
