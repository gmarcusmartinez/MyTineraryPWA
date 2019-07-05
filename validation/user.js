const { check } = require('express-validator/check')

const userValidation = [
  check('email', 'Email field can not be empty')
    .not()
    .isEmpty(),
  check('email', 'Must be a valid Email').isEmail(),
  check('password', 'Password field can not be empty')
    .not()
    .isEmpty(),
  check(
    'password',
    'Password must be at least 8 charachters ins length.'
  ).isLength({ min: 8 })
]
module.exports = userValidation
