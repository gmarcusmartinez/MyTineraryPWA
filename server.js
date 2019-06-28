const express = require('express')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(express.json({ extended: false }))
app.use('/cities', require('./routes/cities'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
