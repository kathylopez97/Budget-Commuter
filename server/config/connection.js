// Import mongoose connection
const mongoose = require('mongoose');
// connect mongodb to server
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vehicleEcommerce-db'
);
// Export mongoose connection
module.exports = mongoose.connection;
