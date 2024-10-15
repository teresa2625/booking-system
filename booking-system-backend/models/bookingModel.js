// const { Client } = require('pg');

// const client = new Client({
//   user: 'your_user',
//   host: 'localhost',
//   database: 'booking_system',
//   password: 'your_password',
//   port: 5432,
// });

// client.connect();

const createBooking = async (bookingData) => {
  const query = `
    INSERT INTO bookings (name, email, phone, booking_date, service)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;
  `;
  const values = [
    bookingData.name,
    bookingData.email,
    bookingData.phone,
    bookingData.booking_date,
    bookingData.service,
  ];
  const result = await client.query(query, values);
  return result.rows[0];
};

module.exports = { createBooking };
