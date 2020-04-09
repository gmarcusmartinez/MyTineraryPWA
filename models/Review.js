const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  itinerary: {
    type: mongoose.Schema.ObjectId,
    ref: "itinerary",
    required: true,
  },
  text: {
    type: String,
    required: [true, "Please add text."],
    maxlength: [500, "Review should not exceed 500 characters."],
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please add a rating."],
  },
});

module.exports = Review = mongoose.model("review", ReviewSchema);
