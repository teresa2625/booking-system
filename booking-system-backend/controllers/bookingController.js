const { createBooking } = require("../models/bookingModel");

const saveBooking = async (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const bookingData = JSON.parse(body);
      const savedBooking = await createBooking(bookingData);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: savedBooking }));
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid data" }));
    }
  });
};

module.exports = { saveBooking };
