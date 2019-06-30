const { check } = require('express-validator/check')
const cityValidation = [
  check('name', 'Name field can not be empty.')
    .not()
    .isEmpty(),
  check('country', 'Country field can not be empty.')
    .not()
    .isEmpty(),
  check(
    'country',
    'Country field can not exceed two charachters in length.'
  ).isLength({ min: 2, max: 2 }),
  check('img', 'Image field can not be empty.')
    .not()
    .isEmpty(),
  check('img', 'Image field must contain a valid URL.').isURL()
]

module.exports = cityValidation
