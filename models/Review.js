const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  img: {
    type: String
  },
  itinerary: {
    type: Schema.Types.ObjectId,
    ref: 'itinerary'
  },
  text: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = Review = mongoose.model('review', ReviewSchema)
