const axios = require('axios')
const express = require('express')
const auth = require('../utils/auth')
const config = require('config')
const Activity = require('../models/Activity')
const Itinerary = require('../models/Itinerary')
const activityValidation = require('../validation/activity')
const { validationResult } = require('express-validator/check')

const router = express.Router()
/**
 *@function CREATE Activity for specific Itinerary
 * @param :id
 */
router.post('/:id', [auth, activityValidation], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const user = req.user.id

    const activity = await new Activity(req.body)
    activity.user = user

    const mapboxAPIKey = config.get('mapboxAPIKey')
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      activity.location
    )}.json?access_token=${mapboxAPIKey}`

    const response = await axios.get(url)
    const coords = response.data.features[0].center
    activity.coords.lat = coords[0]
    activity.coords.lng = coords[1]
    activity.location = response.data.features[0].place_name

    await activity.save()
    const itinerary = await Itinerary.findById(req.params.id)
    itinerary.activities.push(activity._id)
    await itinerary.save()
    res.json(activity)
  } catch (err) {
    return res
      .status(400)
      .json({ errors: [{ msg: 'Unable to create Activity.' }] })
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
 * @function  GET Activity by  ID
 * @param /edit/:id
 */
router.get('/edit/:id', async (req, res) => {
  const activity = await Activity.findById(req.params.id)
  if (!activity) {
    return res.send({ msg: 'Activity not found.' })
  }
  res.json(activity)
})
/**
 * @function  UPDATE Activity by ID
 * @param :id
 */ router.patch('/:id', [auth, activityValidation], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    let activity = await Activity.findById(req.params.id)
    if (!activity) {
      return res.status(404).json({
        errors: [{ msg: 'Activity not found' }]
      })
    }
    if (req.user.id !== activity.user.toString()) {
      return res.status(400).json({
        errors: [{ msg: 'You are not authorized to perform this action' }]
      })
    }
    activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.send(activity)
  } catch (err) {
    res.send(err.message)
  }
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
