const { check } = require('express-validator/check')

const userValidation = [
  check('email', 'Email  must be provided.')
    .not()
    .isEmpty(),
  check('email', 'A valid email must be required.').isEmail(),
  check('password', 'Password must be at least 6 charachters.').isLength({
    min: 8
  })
]
module.exports = userValidation
