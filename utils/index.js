const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createToken = async user => {
  const token = jwt.sign({ _id: user._id }, config.get('jwtSecret'))
  return token
}
const hash = async password => {
  const hashedVal = await bcrypt.hash(password, 8)
  return hashedVal
}

module.exports = { createToken, hash }
