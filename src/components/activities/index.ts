import { div } from '@cycle/dom'

import { List } from '../list/'
import { Activity } from '../activity_card/'
import { Separator } from '../separator/'

export function Activities() {
  return div([
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

    Separator(),

    Activity({
      title: 'TomskJS #0',
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
