import { run, Drivers } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'

import './styles.css'
import { Sources, Sinks } from './types'
import { MainPage } from './pages/main_page'

function main(sources: Sources): Sinks {
  const mainPage = MainPage(sources)
  return {
    DOM: mainPage.DOM,
  }
}

const drivers: Drivers<Sources, Sinks> = {
  DOM: makeDOMDriver('#app'),
}

run(main, drivers)
