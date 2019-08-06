const express = require('express')
const auth = require('../utils/auth')
const User = require('../models/User')
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
    const user = await User.findById(req.user.id)
    const itinerary = req.params.id

    const review = await new Review(req.body)

    review.user = user._id
    review.itinerary = itinerary
    review.img = user.img

    review.save()
    res.send(review)
  } catch (err) {}
})

/**
 *@function GET Reviews by Itinerary ID
 * @param :id
 * @returns Array of Reviews
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

/**
 *@function GET All
 * @returns Array of Reviews
 */
router.get('/', async (req, res) => {
  const reviews = await Review.find()
  if (!reviews) {
    return res.status(400).json({
      errors: [{ msg: 'No reviews found.' }]
    })
  }
  res.json(reviews)
})

/**
 *@function GET by ID
 * @param :id
 * @returns single Review
 */
router.get('/edit/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
    if (!review) {
      return res.status(400).json({ errors: [{ msg: 'Review not found.' }] })
    }
    res.json(review)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

/**
 *@function UPDATE by id
 * @param :id
 * @returns Updated Review
 */
router.patch('/:id', [auth, reviewValidation], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    let review = await Review.findById(req.params.id)
    if (!review) {
      return res.status(404).json({
        errors: [{ msg: 'Review not found' }]
      })
    }
    if (req.user.id !== review.user.toString()) {
      return res.status(400).json({
        errors: [{ msg: 'You are not authorized to perform this action' }]
      })
    }
    review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.send(review)
  } catch (err) {
    res.send(err.message)
  }
})
/**
 *@function DELETE by id
 * @param :id
 * @returns Success Message
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
    if (!review) {
      return res.send({ msg: 'Review not found.' })
    }
    if (req.user.id !== review.user.toString()) {
      return res.status(400).json({
        errors: [{ msg: 'You are not authorized to perform this action' }]
      })
    }
    await review.remove()
    res.json({ msg: 'Review removed.' })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
