const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  title: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [30, "Title must be under 30 charachters"]
  },
  slug: String,
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  img: {
    type: String,
    required: true,
    default:
      "https://www.steigenberger.com/cache/images/berlin_fotolia_93887_2306ae4113b62425b112e36-1-1.jpg"
  },
  description: {
    type: String,
    trim: true,
    maxlength: [200, "Description must be under 200 charachters"]
  },
  // address: {
  //   type: String,
  //   required: [true, "Please add an address"]
  // },
  // location: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //     index: "2dsphere"
  //   },
  //   formattedAddress: String,
  //   street: String,
  //   city: String,
  //   state: String,
  //   zipcode: String,
  //   country: String
  // },
  price: {
    type: String,
    default: "$",
    enum: ["$", "$$", "$$$"]
  },
  duration: {
    type: String,
    enum: ["1-3 Hours", "3-5 Hours", "5+ Hours"]
  },
  published: {
    type: Boolean,
    default: false
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be atleast 1"],
    max: [5, "Rating cannot exceed 5"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
