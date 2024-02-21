import React from 'react';
import ReactDOM from 'react-dom/client';
import './Booking.css';
import App from './App';
import ii from './images/ii.jpg';
function Booking(){
  return(
    <div className='booking-a'>
      <img src={ii} alt='img1' style={{maxWidth:'100%',height:'auto'}}/>
    <div className="container">
    <h2>Slot Booking</h2>
    <form action="/book-slot" method="post">
      <label htmlFor="bookingDate">Booking Date:</label>
      <input type="date" id="bookingDate" name="bookingDate" required />

      <label htmlFor="bookingTime">Booking Time:</label>
      <input type="time" id="bookingTime" name="bookingTime" required />

      <label htmlFor="date">Select a date:</label>
      <input type="date" id="date" name="date" required />

      <label>Select a time slot:</label>
      <div className="time-slot">
        <input type="radio" id="morning" name="timeslot" value="morning" required />
        <label htmlFor="morning">Morning (9:00 AM - 12:30 PM)</label>
      </div>
      <div className="time-slot">
        <input type="radio" id="afternoon" name="timeslot" value="afternoon" required />
        <label htmlFor="afternoon">Afternoon (12:30 PM - 4:00 PM)</label>
      </div>
      <div className="time-slot">
        <input type="radio" id="evening" name="timeslot" value="evening" required />
        <label htmlFor="evening">Evening (4:00 PM - 8:00 PM)</label>
      </div>

      <button type="submit">Book Slot</button>
    </form>
  </div>
  </div>
  );
}

export default Booking;