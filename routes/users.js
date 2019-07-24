const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const auth = require('../utils/auth')
const { createToken } = require('../utils/index')
const userValidation = require('../validation/user')
const loginValidation = require('../validation/login')
const { validationResult } = require('express-validator/check')

/**
 * Register user
 */
router.post('/', userValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    let user = await User.findOne({ email: req.body.email })

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'Email not available.' }] })
    }

    user = new User(req.body)

    user.password = await bcrypt.hash(user.password, 8)
    await user.save()

    const token = await createToken(user)
    res.send({ token })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
/**
 * Login user
 */
router.post('/login', loginValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Unable to login.' }] })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Unable to login.' }] })
    }
    const token = await createToken(user)
    res.send({ token })
  } catch (err) {
    console.error(err.message)
  }
})
/**
 * Fetch all users
 */
router.get('/all', async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.send(users)
  } catch (err) {
    console.error(err.message)
  }
})

/**
 * Delete user
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id)
    if (!user) {
      return res.send({ msg: 'User not found' })
    }
    res.send({ msg: 'User Removed' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

/**
 * Returns the currently logged in authenticated user
 */

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id }).select('-password')
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
