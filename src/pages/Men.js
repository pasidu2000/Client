import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TShirt8 from "../Images/T10.jpg";
import TShirt9 from "../Images/T11.jpg";
import TShirt10 from "../Images/T12.jpg";
import TShirt11 from "../Images/T13.jpg";
import TShirt12 from "../Images/T14.jpg";
import TShirt13 from "../Images/T15.jpg";


const tshirts = [
  { id: 1, name: 'TShirt8', image: TShirt8, price: 'Rs.1200' },
  { id: 2, name: 'TShirt9', image: TShirt9, price: 'Rs.1200' },
  { id: 3, name: 'TShirt10', image: TShirt10, price: 'Rs.1200'},
  { id: 4, name: 'TShirt11', image: TShirt11, price: 'Rs.1200' },
  { id: 5, name: 'TShirt12', image: TShirt12, price: 'Rs.1200' },
  { id: 6, name: 'TShirt13', image: TShirt13, price: 'Rs.1200'},

];

function Men() {
  return (
    <>
      <NavBar />
      <div className="Men" style={{ marginTop: '60px' }}>
        <header className="Men-header">
          <h1 style={{ marginTop: '-50px' }}>Welcome to Men's Section</h1>
        </header>
        <Container>
          <Row>
            {tshirts.map((tshirt) => (
              <Col md={4} key={tshirt.id} className="mb-4"> {/* Add margin-bottom class here */}
                <Card className="h-100"> {/* Add h-100 class here */}
                  <Card.Img variant="top" src={tshirt.image} style={{ height: '400px', objectFit: 'cover' }} /> {/* Add height and objectFit styles here */}
                  <Card.Body>
                    <Card.Title>{tshirt.name}</Card.Title>
                    <Card.Text>
                      {tshirt.price}
                    </Card.Text>
                    <Link to={`/product/${tshirt.id}`} className="btn btn-primary">View</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Men;