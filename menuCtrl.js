// routes/restaurants.js (or any appropriate file)
const express = require('express');
const router = express.Router();
const Restaurant = require('../model/Addrestaurant'); // Adjust the path as needed

// Fetch menu items for a specific restaurant
const getMenu= async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant.menu);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {getMenu};
