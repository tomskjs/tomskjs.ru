import './styles.css'
import { run, FantasyObservable, Drivers } from '@cycle/run'
import { h2, VNode, DOMSource, div, makeDOMDriver } from '@cycle/dom'
import xs, { Stream } from 'xstream'

import { Title } from './components/title'

interface Sources {
  DOM: DOMSource,
}

interface Sinks {
  DOM: Stream<VNode>,
  [key: string]: FantasyObservable,
}

function main(): Sinks {
  return {
    DOM: xs.of(div([
      'Titles',
      Title('Title L', { tag: h2, size: 'L' }),
      Title('Title M'),
      Title('Title S', { size: 'S' }),
    ])),
  }
}

const drivers: Drivers<Sources, Sinks> = {
  DOM: makeDOMDriver('#app'),
}

run(main, drivers)
