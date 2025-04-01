// routes/restaurantRoutes.js
const express = require("express");
const bcrypt = require("bcrypt");
const restadd = require("../model/Addrestaurant");
const jwt = require("jsonwebtoken");
const { restaurantAdd } = require("../controller/ResCtrl");
const upload = require("../middleware/multer");
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Register Route
router.post("/addRestaurant", upload.array("resImage", 3), restaurantAdd);
// router.post("/addRestaurant", restaurantAdd);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const uploader = multer({ storage: storage });

// Add a menu item
router.post('/Restaurant/:id/Menu', uploader.single('dishImage'), async (req, res) => {
  const { dishName, price, dishType } = req.body;
  const dishImage = req.file ? req.file.filename : null;
  const newItem = { dishName, price, dishImage, dishType };

  try {
    const restaurant = await restadd.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    restaurant.menu.push(newItem);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete a menu item
router.delete('/Restaurant/:id/Menu/:menuItemId', async (req, res) => {
  try {
    const restaurant = await restadd.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const menuItemIndex = restaurant.menu.findIndex(item => item.id === req.params.menuItemId);
    if (menuItemIndex === -1) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    restaurant.menu.splice(menuItemIndex, 1);
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


module.exports = router;
