import { div } from '@cycle/dom'

import * as css from '../../utils/css'
import { Title } from '../title/'
import { List } from '../list/'
import { Activity } from '../activity_card/'

import * as styles from './styles.css'
const styl = css.dotify(styles)

// function separator() {
//   return hr(styl.separator)
// }

export function Activities() {
  return div(styl.activities, [
    div(styl.title, [
      Title('События'),
    ]),

    Activity({
      title: 'TomskJS #2',
      highlighted: true,
      content: List([
        'Максим Самойлов «Введение в Cycle.js»',
        'Сергей Черепанов «Обучение фронтенду, взгляд со стороны работодателя»',
        'Никита Размахнин «Как мы пришли к TypeScript»',
        'Сергей Андреев «Как я писал свой «React» и почему это не надо делать»',
      ]),
    }),

    Activity({
      title: 'TomskJS #1',
      content: List([
        'Сергей Андреев «How to stop chasing technology»',
        'Никита Размахнин «Реактивное» тестирование или React компоненты, на которые можно положиться»',
        'Сергей Черепанов «Универсальный JavaScript»',
        'Максим Самойлов «Не JS во фронтенде»',
        'Артур Дробинский «Веб-компоненты в веб-разработке на примере Polymer»',
      ]),
    }),
  ])
}
