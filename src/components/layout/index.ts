import { div } from '@cycle/dom'

import { Content } from '../../types'
import * as css from '../../utils/css'

import * as styles from './styles.css'
const styl = css.dotify(styles)

export function Layout(content: Content) {
  return div(styl.layout, content)
}
