export type ProductProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
};

export type PaginationHookType = {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
  currentItems: (items: any[]) => any[];
  resetPagination: () => void;
};

export type HandleBuyClickParams = {
  productId: number;
  title: string;
};
