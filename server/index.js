const { getInstagramCollection } = require('./utils/instagram-util')

const express = require('express')

const app = express()

const PORT = 3001

app.get(`/`, async (req, res) => {

  // const collection = await getInstagramCollection("https://www.instagram.com/p/B_xfntNJleV/?__a=1")

  // console.log(collection)

  console.log('fire')

  // res.send(collection.graphql.shortcode_media.edge_sidecar_to_children)
})

app.listen(PORT, () => {
  console.log(`Instagram utility server listening on port ${PORT}`)
})