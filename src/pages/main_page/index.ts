import { div } from '@cycle/dom'
import xs from 'xstream'

import { Sources, Sinks } from '../../types'
import { Title } from '../../components/title'
import { Text } from '../../components/text'
import { Layout } from '../../components/layout'
import { TomskJSLogo } from '../../components/tomskjs_logo'
import * as css from '../../utils/css'

import * as styles from './styles.css'
const styl = css.dotify(styles)

const about = `
  У тебя не должно быть любимого оружия. Стать слишком близким с одним
  оружием — большая ошибка, чем недостаточное знание его. Не копируй других,
  действуй по ситуации. Плохо также для солдат и командиров испытывать к кому-то
  любовь или неприязнь. Тщательно изучи это.
`

const goals = `
  Стратегия Ити отличается от других систем тем, что если ты хоть немного
  уклонишься с верного Пути, то подвергнешься опасности и попадешь на скользкую
  дорогу. Если ты будешь просто перелистывать эту книгу, ты не постигнешь Пути
  Стратегии. Впитай сказанное. Не просто читай, запоминая или имитируя,
  но напряженно изучай, чтобы вобрать знания в свое существо и ощутить принцип
  собственным сердцем.
`

const help = `
  Рассчитывай все. Расчет в Стратегии невозможно изучить без большого объема
  практики.
`

function About() {
  return div([
    div(styl.logo, TomskJSLogo()),
    div(styl.heading, Title('TomskJS', { size: 'L' })),
    div(styl.headerText, Text(about)),
  ])
}


function DescriptionSection(title: string, text: string) {
  return div(styl.description, [
    div(styl.title, Title(title, { size: 'S' })),
    div(styl.text, Text(text)),
  ])
}

export function MainPage(_: Sources): Sinks {
  const vtree$ = xs.of(
    Layout([
      About(),
      div(styl.descriptions, [
        DescriptionSection('Наши цели', goals),
        DescriptionSection('Участие', help),
      ]),
    ]),
  )
  return {
    DOM: vtree$,
  }
}
