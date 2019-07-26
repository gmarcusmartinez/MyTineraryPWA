const { check } = require('express-validator/check')

const reviewValidation = [
  check('text', 'Text field can not be empty.')
    .not()
    .isEmpty()
]

module.exports = reviewValidation
