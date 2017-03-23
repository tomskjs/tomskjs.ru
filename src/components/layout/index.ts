import { div, VNode } from '@cycle/dom'

import * as styles from './styles.css'

export function Layout(content: string | Array<VNode>) {
  return div('.' + styles.layout, content)
}
