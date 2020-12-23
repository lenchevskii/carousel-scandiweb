const fetch       = require('node-fetch')

const fetchJson   = async (url) => await fetch(url).then(x => x.json()).catch(e => console.error(e))


module.exports    = { fetchJson }