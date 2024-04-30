import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming Bootstrap for UI components
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FooterStyle.css'; // Import your footer style here

function Footer() {
  return (
    
    <footer className="bg-dark text-light py-4">
      <div id="footer">
        <Container>
          <Row>

            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
              </ul>
            </Col>
              <Col md={4}>
                <h5>Contact Us</h5>
                <p>Email: tharufashion@gmail.com</p>
                <p>Phone: +94 705048415</p>
              </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
