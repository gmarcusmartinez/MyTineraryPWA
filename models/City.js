const mongoose = require("mongoose");
const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  country: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});
module.exports = City = mongoose.model("city", CitySchema);
