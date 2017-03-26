import { hr } from '@cycle/dom'

import * as styles from './styles.css'

export function Separator() {
  return hr('.' + styles.separator)
}
