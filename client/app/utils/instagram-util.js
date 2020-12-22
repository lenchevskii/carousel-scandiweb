const fetch = require('node-fetch')

export const getCollection = async (url) => (
  await fetch(url)
)

const linkExample = 'https://www.instagram.com/p/B_xfntNJleV/?__a=1'

// const collection = getCollection(linkExample)

// console.log(collection)