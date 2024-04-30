import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

// Address page component
function Address() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    // Fetch user data from server
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setFormData(data);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleMenuClick = (path) => {
    navigate(path);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server
  }

  return (
    <div id="Address">
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={3}  className="left-menu">
            <ul>
            <li><Link to="/user-information">User Information</Link></li>
            <li><Link to="/address">Address</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/">Logout</Link></li>
            </ul>
          </Col>
          <Col md={9}>
            <Form onSubmit={handleSubmit}>
              <h4>Address</h4>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" name="Country" value={formData.Country} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formProvince">
                <Form.Label>Province/State</Form.Label>
                <Form.Control type="text" placeholder="Province/State" name="Province" value={formData.Province} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="City" placeholder="City" name="City" value={formData.City} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formPostalCode">
                <Form.Label>PostalCode</Form.Label>
                <Form.Control type="text" placeholder="PostalCode" name="PostalCode" value={formData.PostalCode} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="Address" placeholder="Address" name="Address" value={formData.Address} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Address;
