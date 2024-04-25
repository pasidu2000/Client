import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import TShirt1 from "../Images/T3.jpg"; // Import your T-Shirt 1 image hereo

const tshirts = [
  { id: 1, name: 'TShirt1', image: TShirt1, price: 'Rs.1200' },
  // { id: 2, name: 'T-Shirt 2', image: 'url_to_image_2', price: '$25' },
  // Add more t-shirts as needed
];

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <div className="shop-name">Tharu Fashion</div>
        <h1>Welcome to Tharu Fashion</h1>
      </header>
      <Container>
        <Row>
          {tshirts.map((tshirt) => (
            <Col md={4} key={tshirt.id}>
              <Card className="HomePage-card">
                <Card.Img variant="top" src={tshirt.image} />
                <Card.Body>
                  <Card.Title>{tshirt.name}</Card.Title>
                  <Card.Text>{tshirt.price}</Card.Text>
                  <Link to={`/products/${tshirt.id}`} className="btn btn-primary">View Details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
