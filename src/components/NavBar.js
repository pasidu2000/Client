// NavBar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBarStyle.css';
import logo from '../Images/TFLogo.jpg';

function NavBar() {
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleMouseEnter = (tab) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <nav>
      <div id="navbar">
        <img src={logo} alt="Shop Logo" />
        <ul className="nav-links">
          <li>
            <Link
              to="/home"
              className={location.pathname === '/home' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/men"
              className={location.pathname === '/men' || hoveredTab === 'men' ? 'active' : ''}
              onMouseEnter={() => handleMouseEnter('men')}
              onMouseLeave={handleMouseLeave}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/women"
              className={location.pathname === '/women' || hoveredTab === 'women' ? 'active' : ''}
              onMouseEnter={() => handleMouseEnter('women')}
              onMouseLeave={handleMouseLeave}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
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
