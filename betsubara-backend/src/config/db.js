const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mrcharlesagustin:selerqc@mydbdata.iod8q.mongodb.net/BetsubaraDB?retryWrites=true&w=majority&appName=mydbdata');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;