import { useState } from "react";
import { PaginationHookType } from "../types";

const usePagination = (
  totalItems: number,
  itemsPerPage: number
): PaginationHookType => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (items: any[]) =>
    items.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    totalPages,
    paginate,
    currentItems,
  };
};

export default usePagination;
