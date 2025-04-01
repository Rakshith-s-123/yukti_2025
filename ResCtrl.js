const Rest = require("../model/Resmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const restadd = require("../model/Addrestaurant");
const IMG_BASE_URL = "http://localhost:3001/static/";

const restro = require("../model/Addrestaurant");
const JWT_SECRET = "jwt-secret-key";

const createUser = async (req, res) => {
  const { rName, rEmail, rMobile, rPassword } = req.body;

  try {
    const existingRestaurant = await Rest.findOne({
      $or: [{ rEmail }, { rMobile }],
    });
    if (existingRestaurant) {
      return res.status(400).json({
        message: "User with the same email or phone number already exists",
      });
    }
    const hash = await bcrypt.hash(rPassword, 10);
    const newRestaurant = await Rest.create({
      rName,
      rEmail,
      rMobile,
      rPassword: hash,
    });
    res.json(newRestaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const loginResCtrl = async (req, res) => {
  const { rEmail, rPassword } = req.body;

  try {
    const Restaurant = await Rest.findOne({ rEmail });
    if (!Restaurant) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      rPassword,
      Restaurant.rPassword
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      {
        rEmail: Restaurant.rEmail,
        rName: Restaurant.rName,
        id: Restaurant._id,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const restaurantAdd = async (req, res) => {
  const {
    resName,
    resAddress,
    resNumber,
    resOperationalHours,
    restaurantTypes,
  } = req.body;

  try {
    const existingRest = await restadd.findOne({ resNumber });
    if (existingRest) {
      return res
        .status(400)
        .json({ message: "Restaurant with the same number already exists" });
    }
    let resImages = [];
    if (req.files) {
      resImages = req.files.map(file => IMG_BASE_URL + file.filename);
    }

    const newRest = await restadd.create({
      resName,
      resAddress,
      resNumber,
      resOperationalHours,
      restaurantTypes,
      resImage: resImages,
    });
    res.json(newRest);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restro.find();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getRestroDetails = async (req, res) => {
  try {
    const restaurant = await restro.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    console.log("Working");
    res.json(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  createUser,
  loginResCtrl,
  getAllRestaurants,
  getRestroDetails,
  restaurantAdd,
};
