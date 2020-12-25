const { extractDisplayResources
      , extractMedia
      , fetchJson
      }                           = require('./pipe.handlers/instagram.handlers')

const { template, pattern, fnc }  = require('./pipe.profiles/instagram.profile')

const { compose, curry }          = require('lodash/fp')

const resolveInstagramUrl         = curry(fnc)(template, pattern)

const getInstagramCollection      = compose(extractDisplayResources, extractMedia, fetchJson, resolveInstagramUrl)


module.exports										= { getInstagramCollection }