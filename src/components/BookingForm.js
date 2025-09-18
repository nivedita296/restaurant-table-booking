import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import restaurants from '../data/restaurants';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: 2,
    tableType: '',
    specialRequests: ''
  });
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Get maximum date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getTableTypePrice = (tableType) => {
    const table = restaurant?.tableTypes.find(t => t.type === tableType);
    return table ? table.price : 0;
  };

  const calculateTotal = () => {
    const tablePrice = getTableTypePrice(formData.tableType);
    return tablePrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a random booking ID
    const newBookingId = 'BK' + Date.now().toString().slice(-6);
    setBookingId(newBookingId);
    
    // Store booking in localStorage (in a real app, this would be sent to a server)
    const booking = {
      id: newBookingId,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      ...formData,
      totalAmount: calculateTotal(),
      bookingDate: new Date().toISOString(),
      status: 'confirmed'
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    
    setShowConfirmation(true);
  };

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

  if (showConfirmation) {
    return (
      <div className="booking-confirmation">
        <div className="container">
          <div className="confirmation-card">
            <div className="success-icon">✅</div>
            <h1>Booking Confirmed!</h1>
            <p>Your table has been successfully booked at {restaurant.name}</p>
            
            <div className="booking-details">
              <h3>Booking Details</h3>
              <div className="detail-row">
                <span>Booking ID:</span>
                <strong>{bookingId}</strong>
              </div>
              <div className="detail-row">
                <span>Restaurant:</span>
                <strong>{restaurant.name}</strong>
              </div>
              <div className="detail-row">
                <span>Date & Time:</span>
                <strong>{formData.date} at {formData.time}</strong>
              </div>
              <div className="detail-row">
                <span>Party Size:</span>
                <strong>{formData.partySize} people</strong>
              </div>
              <div className="detail-row">
                <span>Table Type:</span>
                <strong>{formData.tableType}</strong>
              </div>
              <div className="detail-row">
                <span>Total Amount:</span>
                <strong>₹{calculateTotal()}</strong>
              </div>
            </div>
            
            <div className="confirmation-actions">
              <button 
                onClick={() => navigate('/')} 
                className="home-btn"
              >
                Back to Restaurants
              </button>
              <button 
                onClick={() => navigate(`/restaurant/${id}`)} 
                className="restaurant-btn"
              >
                Back to {restaurant.name}
              </button>
            </div>
            
            <p className="confirmation-note">
              A confirmation email will be sent to {formData.email}. 
              Please arrive 15 minutes before your booking time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form">
      <div className="container">
        <Link to={`/restaurant/${id}`} className="back-link">
          ← Back to {restaurant.name}
        </Link>
        
        <div className="booking-header">
          <h1>Book a Table at {restaurant.name}</h1>
          <p>{restaurant.location}</p>
        </div>

        <div className="booking-content">
          <div className="restaurant-summary">
            <img src={restaurant.image} alt={restaurant.name} className="summary-image" />
            <div className="summary-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine} Cuisine</p>
              <p>📍 {restaurant.location}</p>
              <p>🕒 {restaurant.hours}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form-container">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Booking Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    max={maxDateString}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="partySize">Party Size *</label>
                  <select
                    id="partySize"
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleInputChange}
                    required
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(size => (
                      <option key={size} value={size}>
                        {size} {size === 1 ? 'person' : 'people'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="tableType">Table Type *</label>
                  <select
                    id="tableType"
                    name="tableType"
                    value={formData.tableType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select table type</option>
                    {restaurant.tableTypes.map((table, index) => (
                      <option key={index} value={table.type}>
                        {table.type} {table.price > 0 ? `(+₹${table.price})` : '(No extra charge)'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {formData.tableType && (
              <div className="table-type-info">
                <h4>Selected Table: {formData.tableType}</h4>
                <p>{restaurant.tableTypes.find(t => t.type === formData.tableType)?.description}</p>
                <div className="price-breakdown">
                  <div className="price-row">
                    <span>Table booking fee:</span>
                    <span>₹{getTableTypePrice(formData.tableType)}</span>
                  </div>
                  <div className="price-row total">
                    <span>Total Amount:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="form-section">
              <h3>Special Requests (Optional)</h3>
              <div className="form-group">
                <label htmlFor="specialRequests">Any special requirements?</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Birthday celebration, dietary restrictions, accessibility needs, etc."
                  rows="4"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="confirm-booking-btn">
                Confirm Booking
              </button>
              <p className="booking-note">
                * By booking, you agree to arrive on time. A 15-minute grace period is provided.
                Cancellations must be made at least 2 hours in advance.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;