import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Orders() {
  // const navigate = useNavigate();

  return (
    <div id="Orders">
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
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Orders;
