const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, config.get('jwtSecret'))

    const user = await User.findOne({ _id: decoded._id })
    if (!user) {
      throw new Error()
    }
    req.user = user
    next()
  } catch (err) {
    console.error(err.message)
    res.status(401).json({
      errors: [{ msg: 'You must be authenticated to perform this operation.' }]
    })
  }
}

module.exports = auth
