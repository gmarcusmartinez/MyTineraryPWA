const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItinerarySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  published: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = Itinerary = mongoose.model('itinerary', ItinerarySchema)
