const { getCollection } = require('./utils/instagram-util')
const bodyparser = require('body-parser')
const express = require('express')

const app = express()

const PORT = 3001

// app.use(bodyparser.json())

const link = "https://www.instagram.com/p/B_xfntNJleV/?__a=1"

app.get(`/`, (req, res) => {
  getCollection(link)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})