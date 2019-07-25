const { check } = require('express-validator/check')

const activityValidation = [
  check('title', 'Title field can not be empty.')
    .not()
    .isEmpty(),
  check('location', 'Location field can not be empty.')
    .not()
    .isEmpty()
]

module.exports = activityValidation
