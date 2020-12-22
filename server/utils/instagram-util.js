const { response } = require('express')
const fetch = require('node-fetch')
const { parse } = require('graphql')

const getCollection = async (url) => (
  await fetch(url)
    .then(response => response.json())
    .then(x => console.log(x))
    .catch(error => console.error(error))
)

module.exports = { getCollection }