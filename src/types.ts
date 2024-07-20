export type ProductProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
};
