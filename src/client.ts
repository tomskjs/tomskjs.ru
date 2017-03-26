import { run, Drivers } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'

import './styles.css'
import { Sources, Sinks } from './types'
import { main } from './app'

const drivers: Drivers<Sources, Sinks> = {
  DOM: makeDOMDriver('#app'),
}

run(main, drivers)
