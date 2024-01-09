const mongoose = require('mongoose');
const logger = require('../../config/logger');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options
    if (connection) {
      logger.info('NoSQL Database Connected');
    }
  } catch (error) {
    logger.error(`NoSQL Database Connection error:- ${error}`);
    process.exit(1);
  }
};

module.exports = { connectDB };