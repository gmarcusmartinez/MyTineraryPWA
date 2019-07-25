const express = require('express')
const auth = require('../utils/auth')
const Activity = require('../models/Activity')
const activityValidation = require('../validation/activity')
const { validationResult } = require('express-validator/check')

const router = express.Router()
/**
 *@function CREATE Activity
 * @param :id
 */
router.post('/:id', [auth, activityValidation], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const user = req.user.id
    const itinerary = req.params.id

    const activity = await new Activity(req.body)
    activity.user = user
    activity.itinerary = itinerary

    activity.save()
    res.send(activity)
  } catch (err) {
    res.status(500).send(err.message)
  }
})
/**
 * @function  GET Activities by Itinerary ID
 * @param :id
 */
router.get('/:id', async (req, res) => {
  const activities = await Activity.find({ itinerary: req.params.id })
  if (!activities) {
    return res.send({ msg: 'This Itinerary currently has no activities.' })
  }
  res.json(activities)
})
/**
 * @function  DELETE Activity by ID
 * @param :id
 */
router.delete('/:id', async (req, res) => {
  const activity = await Activity.findById(req.params.id)
  if (!activity) {
    return res.status(400).json({ errors: [{ msg: 'Activity not found.' }] })
  }
  if (activity.user.toString() !== req.user.id) {
    return res.status(400).json({
      errors: [{ msg: 'You are not authorized to perform this action.' }]
    })
  }
  res.json(activity)
})

module.exports = router
