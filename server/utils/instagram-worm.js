const { compose, curry }          = require('lodash/fp')

const { fetchJson }               = require('./handlers/action-api')

const { template, pattern, fnc }  = require('./targets/instagram')

const formatInstagramUrl          = curry(fnc)(template, pattern)

const getInstagramCollection      = compose(fetchJson, formatInstagramUrl)


module.exports = { getInstagramCollection }