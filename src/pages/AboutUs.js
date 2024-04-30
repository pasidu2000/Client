import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <header style={{ marginTop: '10px', textAlign: 'center' }}>
          <h1>Welcome to AboutUs Section</h1>
        </header>
        <p style={{ textAlign: 'center' }}>Tharu Fashion is a Sri Lankan online clothing store. We have a wide range of clothing items for</p>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default AboutUs;
