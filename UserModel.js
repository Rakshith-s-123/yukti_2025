const mongoose = require("mongoose"); // Erase if already required

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  addresses: {
    type: [String], // Changed to array of strings to support multiple addresses
    required: false,
  }
});

// Export the model
module.exports = mongoose.model("User", userSchema);
