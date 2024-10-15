const { saveBooking } = require('../controllers/bookingController');

const bookingRoutes = (req, res) => {
  if (req.method === 'POST' && req.url === '/api/bookings') {
    saveBooking(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

module.exports = bookingRoutes;
