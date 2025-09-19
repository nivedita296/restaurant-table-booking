import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import restaurants from '../data/restaurants';
import './BookingHistory.css';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings);
  }, []);

  const getRestaurantById = (id) => {
    return restaurants.find(r => r.id === parseInt(id));
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') {
      const bookingDate = new Date(booking.date + ' ' + booking.time);
      return bookingDate > new Date();
    }
    if (filter === 'past') {
      const bookingDate = new Date(booking.date + ' ' + booking.time);
      return bookingDate <= new Date();
    }
    return booking.status === filter;
  });

  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'cancelled' }
        : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#22c55e';
      case 'cancelled': return '#ef4444';
      case 'completed': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  if (bookings.length === 0) {
    return (
      <div className="booking-history">
        <div className="container">
          <h1>Your Bookings</h1>
          <div className="no-bookings">
            <div className="no-bookings-icon">📅</div>
            <h3>No bookings found</h3>
            <p>You haven't made any restaurant bookings yet.</p>
            <Link to="/" className="browse-restaurants-btn">
              Browse Restaurants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-history">
      <div className="container">
        <div className="booking-history-header">
          <h1>Your Bookings</h1>
          <Link to="/" className="back-to-restaurants">Browse More Restaurants</Link>
        </div>

        <div className="booking-filters">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All Bookings ({bookings.length})
          </button>
          <button 
            className={filter === 'upcoming' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={filter === 'past' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('past')}
          >
            Past
          </button>
          <button 
            className={filter === 'confirmed' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('confirmed')}
          >
            Confirmed
          </button>
          <button 
            className={filter === 'cancelled' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('cancelled')}
          >
            Cancelled
          </button>
        </div>

        <div className="bookings-list">
          {filteredBookings.map(booking => {
            const restaurant = getRestaurantById(booking.restaurantId);
            const bookingDate = new Date(booking.date + ' ' + booking.time);
            const isUpcoming = bookingDate > new Date();
            
            return (
              <div key={booking.id} className="booking-card">
                <div className="booking-header">
                  <div className="booking-id">Booking #{booking.id}</div>
                  <div 
                    className="booking-status"
                    style={{ backgroundColor: getStatusColor(booking.status) }}
                  >
                    {booking.status.toUpperCase()}
                  </div>
                </div>

                <div className="booking-content">
                  <div className="restaurant-info">
                    {restaurant && (
                      <>
                        <img 
                          src={restaurant.image} 
                          alt={restaurant.name}
                          className="restaurant-thumb"
                        />
                        <div className="restaurant-details">
                          <h3>{restaurant.name}</h3>
                          <p>{restaurant.cuisine} Cuisine</p>
                          <p>📍 {restaurant.location}</p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="booking-details">
                    <div className="booking-info">
                      <div className="info-item">
                        <span className="label">Date:</span>
                        <span className="value">{formatDate(booking.date)}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Time:</span>
                        <span className="value">{formatTime(booking.time)}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Party Size:</span>
                        <span className="value">{booking.partySize} people</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Table:</span>
                        <span className="value">{booking.tableType}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Total:</span>
                        <span className="value">₹{booking.totalAmount}</span>
                      </div>
                    </div>
                    
                    <div className="contact-info">
                      <div className="info-item">
                        <span className="label">Name:</span>
                        <span className="value">{booking.name}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Phone:</span>
                        <span className="value">{booking.phone}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Email:</span>
                        <span className="value">{booking.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {booking.specialRequests && (
                  <div className="special-requests">
                    <strong>Special Requests:</strong>
                    <p>{booking.specialRequests}</p>
                  </div>
                )}

                <div className="booking-actions">
                  <div className="booking-date">
                    Booked on: {new Date(booking.bookingDate).toLocaleDateString('en-IN')}
                  </div>
                  <div className="action-buttons">
                    {restaurant && (
                      <Link 
                        to={`/restaurant/${restaurant.id}`}
                        className="view-restaurant-btn"
                      >
                        View Restaurant
                      </Link>
                    )}
                    {booking.status === 'confirmed' && isUpcoming && (
                      <button 
                        onClick={() => cancelBooking(booking.id)}
                        className="cancel-btn"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBookings.length === 0 && (
          <div className="no-results">
            <h3>No bookings found for this filter</h3>
            <p>Try selecting a different filter to see your bookings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;