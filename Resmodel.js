const mongoose = require("mongoose");

var rSchema = new mongoose.Schema({
  rName: {
    type: String,
    required: true,
  },
  rEmail: {
    type: String,
    required: true,
    unique: true,
  },
  rMobile: {
    type: String,
    required: true,
    unique: true,
  },
  rPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", rSchema);
