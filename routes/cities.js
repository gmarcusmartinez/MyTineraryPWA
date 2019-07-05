const express = require('express')
const router = express.Router()
const City = require('../models/City')
const cityValidation = require('../validation/city')
const { validationResult } = require('express-validator/check')

// Create city
router.post('/', cityValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const city = await new City(req.body)
    city.save()
    res.send(city)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// Fetch all cities from database
router.get('/', async (req, res) => {
  try {
    const cities = await City.find().sort({ name: 1 })
    if (!cities) {
      return res.send({ msg: 'No cities found.' })
    }
    res.json(cities)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// Fetch individual City from database
router.get('/:id', async (req, res) => {
  try {
    const city = await City.findById(req.params.id)
    if (!city) {
      return res.send({ msg: 'City not found.' })
    }
    res.json(city)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// Update individual City in database
router.patch('/:id', cityValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const city = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!city) {
      return res.status(404).send({ msg: 'City Not found' })
    }
    res.send(city)
  } catch (err) {
    res.send(err.message)
  }
})

// Delete individual City from database
router.delete('/:id', async (req, res) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id)
    if (!city) {
      return res.send({ msg: 'City not found.' })
    }
    res.json({ msg: 'City removed.' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
