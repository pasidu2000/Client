import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <header style={{ marginTop: '10px', textAlign: 'center' }}>
          <h1>Welcome to Contact Section</h1>
        </header>
        <p style={{ textAlign: 'center' }}>
            Email: tharufashion@gmail.com
            Phone: +94 705048415</p>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Contact;
