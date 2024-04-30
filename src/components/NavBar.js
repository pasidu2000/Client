import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart,faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBarStyle.css';
import logo from '../Images/TFLogo.jpg';

function NavBar() {
  return (
    <nav>
      <div id="navbar">
        <img src={logo} alt="Shop Logo" /> {/* Use logo image here */}
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" placeholder="Search" />
        </div>

        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart
          </Link>
        </div>
        <div className="account">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
            My Account
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;