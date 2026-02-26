import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3400/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {products.map(prod => (
          <Col md={4} key={prod.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={prod.image} />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>{prod.price} EGP</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;