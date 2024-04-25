import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Profile() {
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
    <div id="profile">
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={3}  className="left-menu">
            <ul>
            <li><Link to="/profile">User Information</Link></li>
            <li><Link to="/address">Address</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/">Logout</Link></li>
            </ul>
          </Col>
          <Col md={9}>
            <Form onSubmit={handleSubmit}>
              <h4>Personal Information</h4>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <h4>Change Password</h4>
              <Form.Group controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} style={{ width: '250px' }} />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} style={{ width: '250px' }} />
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

export default Profile;
