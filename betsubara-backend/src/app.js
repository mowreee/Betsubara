const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/menu', menuRoutes);
app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Betsubara API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});