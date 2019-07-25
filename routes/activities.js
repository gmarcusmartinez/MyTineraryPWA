const axios = require('axios')
const express = require('express')
const auth = require('../utils/auth')
const config = require('config')
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

    const mapboxAPIKey = config.get('mapboxAPIKey')
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      activity.location
    )}.json?access_token=${mapboxAPIKey}`

    const response = await axios.get(url)
    const coords = response.data.features[0].center
    activity.lat = coords[0]
    activity.lng = coords[1]

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
router.delete('/:id', auth, async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id)
    if (!activity) {
      return res.send({ msg: 'Activity not found.' })
    }
    if (req.user.id !== activity.user.toString()) {
      return res.status(400).json({
        errors: [{ msg: 'You are not authorized to perform this action' }]
      })
    }
    await activity.remove()
    res.json({ msg: 'Activity removed.' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
