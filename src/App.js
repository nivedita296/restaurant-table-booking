import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import BookingForm from './components/BookingForm';
import BookingHistory from './components/BookingHistory';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/restaurant/:id/book" element={<BookingForm />} />
          <Route path="/bookings" element={<BookingHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
