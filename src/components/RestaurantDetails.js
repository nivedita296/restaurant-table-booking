import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import restaurants from '../data/restaurants';
import './RestaurantDetails.css';

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const [activeMenuSection, setActiveMenuSection] = useState(Object.keys(restaurant?.menu || {})[0]);

  if (!restaurant) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Restaurant not found</h2>
          <Link to="/" className="back-link">← Back to Restaurants</Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <div className="restaurant-details">
      <div className="container">
        <Link to="/" className="back-link">← Back to Restaurants</Link>
        
        <div className="restaurant-header">
          <div className="restaurant-image-large">
            <img src={restaurant.image} alt={restaurant.name} />
            <div className="image-overlay">
              <h1 className="restaurant-title">{restaurant.name}</h1>
              <div className="restaurant-rating-large">
                <div className="stars">
                  {renderStars(restaurant.rating)}
                </div>
                <span className="rating-number">{restaurant.rating}</span>
                <span className="cuisine-type">{restaurant.cuisine} Cuisine</span>
              </div>
            </div>
          </div>
        </div>

        <div className="restaurant-content">
          <div className="restaurant-info-section">
            <div className="info-card">
              <h3>About {restaurant.name}</h3>
              <p>{restaurant.description}</p>
              
              <div className="restaurant-details-grid">
                <div className="detail-item">
                  <strong>📍 Location:</strong>
                  <span>{restaurant.address}</span>
                </div>
                <div className="detail-item">
                  <strong>📞 Phone:</strong>
                  <span>{restaurant.phone}</span>
                </div>
                <div className="detail-item">
                  <strong>🕒 Hours:</strong>
                  <span>{restaurant.hours}</span>
                </div>
                <div className="detail-item">
                  <strong>💰 Price Range:</strong>
                  <span>{restaurant.priceRange}</span>
                </div>
              </div>
            </div>

            <div className="table-booking-section">
              <h3>Table Booking Options</h3>
              <div className="table-types">
                {restaurant.tableTypes.map((table, index) => (
                  <div key={index} className="table-type-card">
                    <h4>{table.type}</h4>
                    <p>{table.description}</p>
                    <div className="table-price">
                      {table.price === 0 ? 'No extra charge' : `+₹${table.price} booking fee`}
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                to={`/restaurant/${restaurant.id}/book`} 
                className="book-table-btn"
              >
                Book a Table Now
              </Link>
            </div>
          </div>

          <div className="menu-section">
            <h2>Our Menu</h2>
            
            <div className="menu-navigation">
              {Object.keys(restaurant.menu).map(section => (
                <button
                  key={section}
                  className={`menu-nav-btn ${activeMenuSection === section ? 'active' : ''}`}
                  onClick={() => setActiveMenuSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="menu-content">
              <h3>{activeMenuSection.charAt(0).toUpperCase() + activeMenuSection.slice(1)}</h3>
              <div className="menu-items">
                {restaurant.menu[activeMenuSection]?.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="item-name">
                        {item.name}
                        {item.vegetarian && <span className="veg-indicator">🟢</span>}
                        {!item.vegetarian && <span className="non-veg-indicator">🔴</span>}
                      </h4>
                      <span className="item-price">₹{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;