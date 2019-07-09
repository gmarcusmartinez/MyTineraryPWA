const express = require('express')
const router = express.Router()
const Itinerary = require('../models/Itinerary')
const itineraryValidation = require('../validation/itinerary')
const { validationResult } = require('express-validator/check')

// Create Itinerary
router.post('/', itineraryValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const itinerary = await new Itinerary(req.body)
    itinerary.save()
    res.send(itinerary)
  } catch (err) {
    res.status(500).send(err.message)
  }
})
// Get Itineraries
router.get('/', async (req, res) => {
  try {
    const itineraries = await Itinerary.find()
    if (!itineraries) {
      return res.send({ msg: 'No itineraries found.' })
    }
    res.json(itineraries)
  } catch (err) {
    res.status(500).send(err.message)
  }
})
// Get Itinerary by id
router.get('/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id)
    if (!itinerary) {
      return res.send({ msg: 'Itinerary not found.' })
    }
    res.json(itinerary)
  } catch (err) {
    res.status(500).send(err.message)
  }
})
// Get Itinerary by city
router.get('/city/:cityName', async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ city: req.params.cityName })
    if (!itineraries) {
      return res.send({ msg: 'This city currently has no itineraries.' })
    }
    res.json(itineraries)
  } catch (err) {
    res.status(500).send(err.message)
  }
})
//Update Itinerary
router.patch('/:id', itineraryValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    )
    if (!itinerary) {
      return res.status(404).send({ msg: 'Itinerary Not found' })
    }
    res.send(itinerary)
  } catch (err) {
    res.send(err.message)
  }
})
// Delete individual City from database
router.delete('/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndDelete(req.params.id)
    if (!itinerary) {
      return res.send({ msg: 'Itinerary not found.' })
    }
    res.json({ msg: 'Itinerary removed.' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})
module.exports = router
