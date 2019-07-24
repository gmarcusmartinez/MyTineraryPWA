const config = require('config')
const jwt = require('jsonwebtoken')

const createToken = async user => {
  const token = jwt.sign({ _id: user._id }, config.get('jwtSecret'))
  return token
}

module.exports = { createToken }
