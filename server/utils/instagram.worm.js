const { extractDisplayResources
      , extractMedia
      , fetchJson
      }                           = require('./pipe.handlers/instagram.handlers')

const { template
			, pattern
			, resolveUrl
			}														= require('./pipe.profiles/instagram.profile')

const { compose, curry }          = require('lodash/fp')

const resolveInstagramUrl         = curry(resolveUrl)(template, pattern)

const getInstagramCollection      = compose(extractDisplayResources, extractMedia, fetchJson, resolveInstagramUrl)


module.exports										= { getInstagramCollection }