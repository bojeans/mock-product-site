import Product from "./Product";

type ProductsProps = {
  products: any[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <ul>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          image={product.image}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </ul>
  );
};

export default Products;
