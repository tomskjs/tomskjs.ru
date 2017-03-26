import { ul, li, span } from '@cycle/dom'

import { Content } from '../../types'
import { Text } from '../text/'
import * as css from '../../utils/css'

import * as styles from './styles.css'
const styl = css.dotify(styles)


export function List(content: Content[]) {
  return ul(styl.list, content.map(item => li(styl.item, Text(item, { tag: span }))))
}
