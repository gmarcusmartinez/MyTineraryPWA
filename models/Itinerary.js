const mongoose = require("mongoose");
const slugify = require("slugify");
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
  photo: {
    type: String,
    required: true,
    default: ""
  },
  description: {
    type: String,
    trim: true,
    maxlength: [140, "Description must be under 140 charachters"]
  },
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

ItinerarySchema.pre("save", function(next) {
  this.slug = slugify(`${this.city}-${this.title}`, { lower: true });
  next();
});

module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
