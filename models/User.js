const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    trim: true,
    type: String,
    required: true
  },
  img: {
    type: String,
    default:
      'https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png'
  }
})

module.exports = User = mongoose.model('user', UserSchema)
