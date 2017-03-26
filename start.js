const { start } = require('./dist/server')
const assets = require('./dist/assets.json')

const server = start(assets)
