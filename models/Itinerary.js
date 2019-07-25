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
    type: String,
    required: true,
    default:
      'https://www.steigenberger.com/cache/images/berlin_fotolia_93887_2306ae4113b62425b112e36-1-1.jpg'
  },
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
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
