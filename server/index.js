const { getInstagramCollection }  = require('./utils/instagram.worm')

const { PORT }                    = require('dotenv').config().parsed

const express                     = require('express')

const app                         = express()

const today                       = new Date()

const moon_url                    = "https://www.instagram.com/p/B_xfntNJleV/?__a=1"

app.get(`/instagram.worm`, async (req, res) => {
  console.log(req.headers)

  const collection = await getInstagramCollection(moon_url)

  res.send(collection)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}. Server time: ${today.toLocaleString()}`)
})