const http = require('http');
const bookingRoutes = require('./routes/bookingRoutes');

const server = http.createServer(bookingRoutes);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
