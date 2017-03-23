import { FantasyObservable } from '@cycle/run'
import { VNode, DOMSource } from '@cycle/dom'
import { Stream } from 'xstream'

export interface Sources {
  DOM: DOMSource,
}

export interface Sinks {
  DOM: Stream<VNode>,
  [key: string]: FantasyObservable,
}
