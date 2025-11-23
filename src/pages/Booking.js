
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    serviceType: "",
    message: ""
  });

  const location = useLocation();
  const selectedService = location.state?.service || null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", formData);
    alert("Your booking has been submitted successfully!");
  };

  return (
    <div className="booking-page">
      <h1 className="booking-title">Book Your Car Detailing Service</h1>

      {/* Layout wrapper: form on left (flex:1), selected service on right */}
      <div className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input 
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input 
                type="date"
                name="date"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input 
                type="time"
                name="time"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <select name="serviceType" required onChange={handleChange}>
              <option value="">Select service type</option>
              <option value="Mobile">Mobile Service (we come to you)</option>
              <option value="At Home">At Shop (you visit us)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message"
              rows="4"
              placeholder="Any special requests?"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Booking
          </button>
        </form>

        {/* Selected service summary shown to the right; hidden if none selected */}
        {selectedService && (
          <aside className="selected-service-box">
            <img src={selectedService.icon} alt={selectedService.title} />
            <h3>{selectedService.title}</h3>
            <p>{selectedService.price}</p>
            <p>{selectedService.desc}</p>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Booking;
