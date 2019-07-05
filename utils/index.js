const config = require('config')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../models/User')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')

const signToken = ({ picture, _id }) => {
  const token = jwt.sign({ picture, sub: _id }, config.get('jwtSecret'))
  return token
}

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: config.get('jwtSecret')
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload._id)
        if (!user) {
          return done(null, false)
        }
        done(null, user)
      } catch (err) {
        done(error, false)
      }
    }
  )
)

module.exports = { signToken }
