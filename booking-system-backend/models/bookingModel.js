const client = require("../utils/db");

const createBooking = async (bookingData) => {
  try {
    const res = await client.query("SELECT NOW()");
    console.log("Database time:", res.rows[0].now);
  } catch (err) {
    console.error("Query error", err.stack);
  } finally {
    client.end(); // Close the connection
  }

  testQuery();
  // const query = `
  //   INSERT INTO bookings (name, email, phone, booking_date, service)
  //   VALUES ($1, $2, $3, $4, $5) RETURNING *;
  // `;
  // const values = [
  //   bookingData.name,
  //   bookingData.email,
  //   bookingData.phone,
  //   bookingData.booking_date,
  //   bookingData.service,
  // ];
  // const result = await client.query(query, values);
  // return result.rows[0];
};

module.exports = { createBooking };
