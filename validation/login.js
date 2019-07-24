const { check } = require('express-validator/check')

const loginValidation = [
  check('email', 'Email  must be provided.')
    .not()
    .isEmpty(),

  check('password', 'A valid email must be required.')
    .not()
    .isEmpty()
]
module.exports = loginValidation
