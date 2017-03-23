import { div } from '@cycle/dom'
import xs from 'xstream'

import { Sources, Sinks } from '../../types'
import { Title } from '../../components/title'
import { Layout } from '../../components/layout'
import { TomskJSLogo } from '../../components/tomskjs_logo'
import * as styles from './styles.css'

export function MainPage(_: Sources): Sinks {
  const vtree$ = xs.of(
    Layout([
      div('.' + styles.logo, TomskJSLogo()),
      div('.' + styles.tomskjs, Title('TomskJS', { size: 'L' })),
    ]),
  )
  return {
    DOM: vtree$,
  }
}
