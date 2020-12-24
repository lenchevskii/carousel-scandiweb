const { getInstagramCollection }  = require('./utils/instagram-worm')

const { PORT }                    = require('dotenv').config().parsed

const express                     = require('express')

const app                         = express()

const today                       = new Date()

const moon_url                    = require('./tests/instagram-worm.test')

app.get(`/instagram-worm`, async (req, res) => {

  const collection = await getInstagramCollection(moon_url)

  // console.log(collection)
  res.send(collection)
  // res.send(collection.graphql.shortcode_media.edge_sidecar_to_children)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}. Server time: ${today.toLocaleString()}`)
})