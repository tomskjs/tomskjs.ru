import fs from 'fs'
import { findAPortNotInUse } from 'portscanner'
import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import debuga from 'express-debuga'
import { validate } from 'schema-inspector'
import { getTweets } from './src/twitter'
import 'colors'

const argv = require('yargs').argv

const getPrerenderedMakeup = (() => {
  try {
    return require('../build/prerender/bundle').default
  } catch (err) {
    console.log(`Prerender invalid (${err})`.bgBlack.red)
    return () => ''
  }
})()

const buildOptions = {}
if (argv.breakpoints) {
  buildOptions.breakpoints = true
}
if (argv.optimize) {
  buildOptions.optimize = true
}

import makeConfig from '../utils/makeWebpackConfig'
const webpackConfig = makeConfig(buildOptions)
const compiler = webpack(webpackConfig)

const app = express()
app.set('view engine', 'jade')
app.set('views', '.')
app.use(bodyParser.json())


if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }))

  app.use(require('webpack-hot-middleware')(compiler))
  app.use(require('express-open-in-editor')())
  app.use(require('morgan')('dev'))
  app.use(debuga())
} else {
  try {
    fs.accessSync('./build/public/bundle.js', fs.F_OK)
    fs.accessSync('./build/prerender/bundle.js', fs.F_OK)
  } catch (err) {
    throw new Error('Run `npm run bulid` to build static before'.red.bgBlack)
  }
  app.use(express.static('./build/public'))
}


// twitter
app.post('/tweets', (req, res) => {
  const validation = validate({
    type: 'array',
    items: {
      type: 'string',
    },
  }, req.body.tweetIds)
  if (!validation.valid) {
    return res.status(400).send({
      error: 'Validation error',
      message: validation.format(),
    })
  }
  getTweets(req.body.tweetIds)
    .then(data => {
      return res.send(data)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send(err)
    })
})

app.get('/*', (req, res) => {
  const application = getPrerenderedMakeup(req)
  res.render('./index', { content: application })
})

findAPortNotInUse(3000, 3010, 'localhost', (error, foundedPort) => {
  if (error) {
    console.log(error)
    return
  }
  const port = process.env.PORT || foundedPort
  app.listen(port, 'localhost', err => {
    if (err) {
      console.log(err)
      return
    }
    console.log(`Listening at ${`http://localhost:${port}`.underline.magenta}`)
  })
})
