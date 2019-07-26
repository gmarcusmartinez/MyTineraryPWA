const express = require('express')
const auth = require('../utils/auth')
const Review = require('../models/Review')
const reviewValidation = require('../validation/review')
const { validationResult } = require('express-validator/check')

const router = express.Router()
/**
 *@function CREATE Review for specific Itinerary
 * @param :id
 */
router.post('/:id', [auth, reviewValidation], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const user = req.user.id
    const itinerary = req.params.id

    const review = await new Review(req.body)
    review.user = user
    review.itinerary = itinerary

    review.save()
    res.send(review)
  } catch (err) {}
})
/**
 *@function GET Reviews by Itinerary ID
 * @param :id
 * @returns Array of
 */
router.get('/:id', async (req, res) => {
  const reviews = await Review.find({ itinerary: req.params.id })
  if (!reviews) {
    return res.status(400).json({
      errors: [{ msg: 'This Itinerary currently has no reviews.' }]
    })
  }
  res.json(reviews)
})

module.exports = router
