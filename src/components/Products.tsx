import Product from "./Product";
import "../App.css";

type ProductsProps = {
  products: any[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="Products">
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
    </div>
  );
};

export default Products;
