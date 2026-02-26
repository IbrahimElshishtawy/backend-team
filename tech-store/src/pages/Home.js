import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";

function Home() {
  // منتجات العروض (يمكن ربطها لاحقًا بالـ backend)
  const featuredProducts = [
    { id: 1, name: "Laptop Pro", price: 15000, image: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Smart Watch", price: 3500, image: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Wireless Headphones", price: 2200, image: "https://via.placeholder.com/300x200" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>أفضل العروض على الأجهزة الإلكترونية</h1>
              <p>اشتري أحدث المنتجات بأفضل الأسعار</p>
              <Link to="/products">
                <Button variant="warning" size="lg">تسوق الآن</Button>
              </Link>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/500x300?text=Tech+Store+Hero"
                alt="Hero Banner"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Products */}
      <Container className="mt-5">
        <h2 className="mb-4">العروض المميزة</h2>
        <Row>
          {featuredProducts.map((prod) => (
            <Col md={4} key={prod.id} className="mb-4">
              <Card className="home-card h-100">
                <Card.Img variant="top" src={prod.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text className="text-primary">{prod.price} EGP</Card.Text>
                  <Button variant="success" className="mt-auto">أضف إلى السلة</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;