const { check } = require('express-validator/check')

const reviewValidation = [
  check('text', 'Text field can not be empty.')
    .not()
    .isEmpty(),
  check('text', 'Review can not exceed 120 charachters.').isLength({
    min: 1,
    max: 120
  })
]

module.exports = reviewValidation
