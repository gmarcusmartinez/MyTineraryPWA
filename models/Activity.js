const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActivitySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  itinerary: {
    type: Schema.Types.ObjectId,
    ref: 'itinerary'
  },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  coords: {
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
  },
  img: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = Activity = mongoose.model('activity', ActivitySchema)
