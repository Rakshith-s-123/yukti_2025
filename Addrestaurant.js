// models/Restaurant.js
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dishImage: {
    type: String,
    required: false,
  },
  dishType: {
    type: String,
    required: false,
  },
});

const restaurantSchema = new mongoose.Schema({
  resDiscount: {
    type: String,
    required: false,
  },
  resName: {
    type: String,
    required: true,
  },
  resReview: [
    {
      type: String,
      required: false,
    },
  ],
  resImage: [
    {
      type: String,
      required: false,
    },
  ],
  resAddress: {
    type: String,
    required: true,
  },
  resNumber: {
    type: Number,
    required: true,
  },
  resOperationalHours: {
    type: String,
    required: true,
  },
  menu: [menuItemSchema],
  rating: {
    type: Number,
    required: false,
  },
  restaurantTypes: [
    {
      type: String,
      required: false,
    },
  ],
});

module.exports = mongoose.model("Resadd", restaurantSchema);
