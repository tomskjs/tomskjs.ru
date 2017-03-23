import { div } from '@cycle/dom'
import xs from 'xstream'

import { Sources, Sinks } from '../../types'
import { Title } from '../../components/title'
import { Text } from '../../components/text'
import { Layout } from '../../components/layout'
import { TomskJSLogo } from '../../components/tomskjs_logo'
import * as styles from './styles.css'

const description = `
  У тебя не должно быть любимого оружия. Стать слишком близким с одним
  оружием — большая ошибка, чем недостаточное знание его. Не копируй других,
  действуй по ситуации. Плохо также для солдат и командиров испытывать к кому-то
  любовь или неприязнь. Тщательно изучи это.
`

export function MainPage(_: Sources): Sinks {
  const vtree$ = xs.of(
    Layout([
      div('.' + styles.logo, TomskJSLogo()),
      div('.' + styles.heading, Title('TomskJS', { size: 'L' })),
      div('.' + styles.headerText, Text(description)),
    ]),
  )
  return {
    DOM: vtree$,
  }
}
