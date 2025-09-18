import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import restaurants from '../data/restaurants';
import './RestaurantList.css';

const RestaurantList = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [loadingAction, setLoadingAction] = useState(null);
  const navigate = useNavigate();

  // Get unique cuisines
  const cuisines = ['All', ...new Set(restaurants.map(r => r.cuisine))];

  // Filter and sort restaurants
  const filteredRestaurants = restaurants
    .filter(restaurant => selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const handleQuickBook = (e, restaurantId) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingAction(`book-${restaurantId}`);
    setTimeout(() => {
      navigate(`/restaurant/${restaurantId}/book`);
    }, 300);
  };

  const handleViewDetails = (e, restaurantId) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingAction(`details-${restaurantId}`);
    setTimeout(() => {
      navigate(`/restaurant/${restaurantId}`);
    }, 200);
  };

  const handleImageError = (e) => {
    // Array of fallback images for restaurants
    const fallbackImages = [
      "https://images.unsplash.com/photo-1552566097-de4e3fd73f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ];
    
    const currentSrc = e.target.src;
    const currentIndex = fallbackImages.indexOf(currentSrc);
    
    if (currentIndex < fallbackImages.length - 1) {
      e.target.src = fallbackImages[currentIndex + 1];
    } else {
      // Last fallback - use a solid color background
      e.target.style.background = 'linear-gradient(135deg, #ff6b35, #d2691e)';
      e.target.style.display = 'none';
      e.target.parentElement.style.background = 'linear-gradient(135deg, #ff6b35, #d2691e)';
      e.target.parentElement.innerHTML += '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-weight: 600; font-size: 1.2rem;">🍛 Restaurant Image</div>';
    }
  };

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
    <div className="restaurant-list">
      <div className="container">
        <div className="hero-section">
          <h1>Discover Authentic Indian Cuisine</h1>
          <p>From North to South, East to West - Experience the diverse flavors of India</p>
          {/* <div className="hero-instructions">
            <span className="instruction-item">🖱️ Click any card to view restaurant details</span>
            <span className="instruction-item">📋 Use "View Menu & Details" to explore menus</span>
            <span className="instruction-item">⚡ Use "Quick Book" to reserve directly</span>
          </div> */}
        </div>

        <div className="filters">
          <div className="filter-group">
            <label htmlFor="cuisine-filter">Filter by Cuisine:</label>
            <select 
              id="cuisine-filter"
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="filter-select"
            >
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter">Sort by:</label>
            <select 
              id="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="restaurants-grid">
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="restaurant-card">
              <Link to={`/restaurant/${restaurant.id}`} className="card-link">
                <div className="restaurant-image">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="cuisine-badge">{restaurant.cuisine}</div>
                  <div className="card-overlay">
                    <span className="overlay-text">Click to view details</span>
                  </div>
                </div>
                
                <div className="restaurant-info">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <div className="restaurant-location">📍 {restaurant.location}</div>
                  
                  <div className="restaurant-rating">
                    <div className="stars">
                      {renderStars(restaurant.rating)}
                    </div>
                    <span className="rating-number">{restaurant.rating}</span>
                    <span className="price-range">{restaurant.priceRange}</span>
                  </div>
                  
                  <p className="restaurant-description">
                    {restaurant.description.substring(0, 100)}...
                  </p>
                  
                  <div className="restaurant-meta">
                    <span className="hours">🕒 {restaurant.hours}</span>
                    <span className="phone">📞 {restaurant.phone}</span>
                  </div>
                </div>
              </Link>
              
              <div className="card-actions">
                <button 
                  onClick={(e) => handleViewDetails(e, restaurant.id)}
                  className="view-details-btn"
                  disabled={loadingAction === `details-${restaurant.id}`}
                >
                  {loadingAction === `details-${restaurant.id}` ? (
                    <span>Loading... 🔄</span>
                  ) : (
                    'View Menu & Details'
                  )}
                </button>
                <button 
                  onClick={(e) => handleQuickBook(e, restaurant.id)}
                  className="quick-book-btn"
                  disabled={loadingAction === `book-${restaurant.id}`}
                >
                  {loadingAction === `book-${restaurant.id}` ? (
                    <span>Booking... 🔄</span>
                  ) : (
                    'Quick Book'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="no-results">
            <h3>No restaurants found</h3>
            <p>Try adjusting your filters to see more options.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;