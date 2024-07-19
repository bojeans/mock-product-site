import Product from "./Product";
import "../App.css"; // Import the styles
import { Container, Row, Col } from "react-bootstrap";

type ProductsProps = {
  products: any[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <Container className="Products">
      <Row>
        {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={6}
            xl={4}
            className="mb-4"
          >
            <Product
              id={product.id}
              title={product.title}
              category={product.category}
              image={product.image}
              description={product.description}
              price={product.price}
              rating={product.rating}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
