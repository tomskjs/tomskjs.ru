import { div, VNode } from '@cycle/dom'

import * as css from '../../utils/css'

import * as styles from './styles.css'
const styl = css.dotify(styles)

export function Layout(content: string | Array<VNode>) {
  return div(styl.layout, content)
}
