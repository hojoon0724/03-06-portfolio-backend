// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
const express = require('express')
const cors = require('cors')

// Import JSON files
const projects = require('./projects.json')
const about = require('./about.json')

// -----------------------------------------------------
// Application Object
// -----------------------------------------------------
const app = express()

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------
app.use(cors())

// -----------------------------------------------------
// GET requests
// -----------------------------------------------------
app.get('/', (req, res) => {
  res.send(`henlo dawg`)
})

app.get('/projects', (req, res) => {
  res.json(projects)
})

app.get('/about', (req, res) => {
  res.json(about)
})

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`)
})
