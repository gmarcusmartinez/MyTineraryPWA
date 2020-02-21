const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  //   user: {
  //     type: Schema.Types.ObjectId,
  //     ref: "users"
  //   },
  //   itinerary: {
  //     type: Schema.Types.ObjectId,
  //     ref: "itinerary"
  //   },
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: [true, "Please add an address"]
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere"
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  img: {
    type: String
  },
  description: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);
