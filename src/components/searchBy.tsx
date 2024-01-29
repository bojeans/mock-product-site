import React from "react";

type SearchByProps = {
  handleSearchChange: (value: string) => void;
};

const SearchBy = ({ handleSearchChange }: SearchByProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  return (
    <form action="/search" method="get">
      <input
        type="text"
        name="q"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBy;
