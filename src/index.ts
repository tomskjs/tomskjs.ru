import './styles.css'
import { run, FantasyObservable, Drivers } from '@cycle/run'
import { VNode, DOMSource, div, makeDOMDriver } from '@cycle/dom'
import xs, { Stream } from 'xstream'

interface Sources {
  DOM: DOMSource,
}

interface Sinks {
  DOM: Stream<VNode>,
  [key: string]: FantasyObservable,
}

function main(): Sinks {
  return {
    DOM: xs.of(div('hello world')),
  }
}

const drivers: Drivers<Sources, Sinks> = {
  DOM: makeDOMDriver('#app'),
}

run(main, drivers)
