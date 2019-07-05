const { check } = require('express-validator/check')

const itineraryValidation = [
  check('title', 'Title field can not be empty.')
    .not()
    .isEmpty(),
  check('city', 'City field can not be empty.')
    .not()
    .isEmpty()
]

module.exports = itineraryValidation
