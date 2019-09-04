const path = require('path')
const express = require('express')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(express.json({ extended: false }))

app.use('/users', require('./routes/users'))
app.use('/cities', require('./routes/cities'))
app.use('/reviews', require('./routes/reviews'))
app.use('/activities', require('./routes/activities'))
app.use('/itineraries', require('./routes/itineraries'))

// Serve Static Assets in Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
