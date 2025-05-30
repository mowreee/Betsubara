To create a backend for your project using MongoDB, you will need to set up a few files. Below is the content for a basic Express server that connects to MongoDB. You can create a new folder named `server` in your project directory and then create the following files:

1. **server.js** - This will be the main entry point for your backend server.
2. **.env** - This file will hold your environment variables, including your MongoDB connection string.
3. **models/Dish.js** - This will define the schema for the dishes in your menu.

Here are the contents for each of these files:

**server.js**
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dishRoutes = require('./routes/dishRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/dishes', dishRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

**.env**
MONGODB_URI=mongodb://<username>:<password>@localhost:27017/betsubara

**models/Dish.js**
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('Dish', dishSchema);

**routes/dishRoutes.js**
const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

// Get all dishes
router.get('/', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new dish
router.post('/', async (req, res) => {
    const dish = new Dish({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
    });

    try {
        const newDish = await dish.save();
        res.status(201).json(newDish);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

Make sure to install the necessary packages by running:
npm install express mongoose dotenv

You can then run your server with:
node server.js

This setup provides a basic backend for your application, allowing you to manage dishes in your menu using MongoDB.