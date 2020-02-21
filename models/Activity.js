const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const geocoder = require("../utils/geocoder");

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
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
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

ActivitySchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address);

  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode
  };

  this.address = undefined;
  next();
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);
