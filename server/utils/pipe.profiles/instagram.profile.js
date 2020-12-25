const { tail, head }              = require("lodash/fp")

const template                    = "https://www.instagram.com/p/{pointer}/?__a=1"

const pattern                     = /(https:\/\/www.instagram.com\/p\/)([^\/.]*)(\/?.*)/

const resolveUrl                  = (template, pattern, url) => template.replace('{pointer}', head(tail(tail(url.match(pattern)))))


module.exports                    = { template, pattern, resolveUrl }