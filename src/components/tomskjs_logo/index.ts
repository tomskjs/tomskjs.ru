import { svg } from '@cycle/dom'

import * as styles from './styles.css'

export function TomskJSLogo() {
  const attrs = {
    viewBox: '0 0 200 200',
    class: styles.logo,
  }
  return svg({ attrs, props: {
    innerHTML: require('./logo.svg'),
  } })
}
