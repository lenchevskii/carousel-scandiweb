const { template, pattern, fnc }  = require('./targets/instagram')

const { compose, curry }          = require('lodash/fp')

const { fetchJson }               = require('./handlers/action-api')

const formatInstagramUrl          = curry(fnc)(template, pattern)

const getInstagramCollection      = compose(fetchJson, formatInstagramUrl)


module.exports = { getInstagramCollection }