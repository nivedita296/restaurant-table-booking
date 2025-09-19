import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🍛 Indian Feast</h1>
        </Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Restaurants
          </Link>
          <Link 
            to="/bookings" 
            className={location.pathname === '/bookings' ? 'nav-link active' : 'nav-link'}
          >
            My Bookings
          </Link>
          <div className="nav-link">
            📞 +91 98765 43200
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;