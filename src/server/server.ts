import { run } from '@cycle/run'
import { makeHTMLDriver } from '@cycle/html'
import * as express from 'express'
import * as compression from 'compression'

import { main } from '../app'

const app = express()

interface Config {
  clientJavaScript: string,
  clientCSS: string,
}

export function start(config: Config) {
  app.use(compression())
  app.use('/assets', express.static('./assets'))

  app.get('/', (_, res) => {
    run(main, {
      DOM: makeHTMLDriver(html => {
        res.render('index.ejs', { content: html, config })
      }),
    })
  })

  app.listen(process.env.PORT || 3000, (err: Error) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Started at http://localhost:3000')
    }
  })

  return app
}
