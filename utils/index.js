const config = require('config')
const request = require('request')
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
const geocode = async address => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${config.get('mapboxAPIKey')}`
  request({ url, json: true }, (error, { body }) => {})
}

module.exports = { createToken, hash }
