import React, { useState } from "react";
import { Booking } from "../types/booking";

const BookingForm: React.FC = () => {
  const [booking, setBooking] = useState<Booking>({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending data to the backend
    console.log("Booking data submitted:", booking);

    // Uncomment to send to your backend API
    /*
    await fetch('http://localhost:4000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });
    */
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Your Reservation</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={booking.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={booking.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Guests:</label>
        <select name="guests" value={booking.guests} onChange={handleChange}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
