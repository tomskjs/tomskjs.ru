import { run } from '@cycle/run'
import { makeHTMLDriver } from '@cycle/html'
import * as express from 'express'

import { main } from '../app'

const app = express()

interface Config {
  clientJavaScript: string,
  clientCSS: string,
}

function template(content: string, config: Config) {
  return `
    <!doctype html>
    <html lang=ru>
      <head>
        <title>TomskJS</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="msapplication-tap-highlight" content="no"/>
        <meta name="format-detection" content="telephone=no"/>
        <link rel=stylesheet href="${config.clientCSS}">
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="${config.clientJavaScript}"></script>
      </body>
    </html>
  `
}


export function start(config: Config) {
  app.use('/assets', express.static('./assets'))

  app.get('/', (_, res) => {
    run(main, {
      DOM: makeHTMLDriver(html => res.send(template(html, config))),
    })
  })

  app.listen(process.env.PORT || 3000)

  return app
}
