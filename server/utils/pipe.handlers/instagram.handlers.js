const { last }                    = require('lodash/fp')

const fetch                       = require('node-fetch')

const fetchJson                   = async (url)         => await fetch(url).then(x => x.json()).catch(e => console.error(e))

const extractMedia                = async (collection)  => await collection.then(x => x.graphql.shortcode_media)

const extractDisplayResources     = async (collection)  => await collection.then(x => x.edge_sidecar_to_children != undefined

                                          ? x.edge_sidecar_to_children.edges.map(y => last(y.node.display_resources))
                                          : Array(last(x.display_resources))
                                        )


module.exports                    = { fetchJson, extractMedia, extractDisplayResources }