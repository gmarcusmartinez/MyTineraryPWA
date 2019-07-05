const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    default:
      'https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png'
  }
})
module.exports = User = mongoose.model('user', UserSchema)
