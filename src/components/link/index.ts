import { a } from '@cycle/dom'

import { Content } from '../../types'
import * as css from '../../utils/css'

import * as styles from './styles.css'
const styl = css.dotify(styles)

interface LinkProps {
  href: string,
}

export function Link(content: Content, props: LinkProps) {
  const attrs = {
    href: props.href,
  }
  return a(styl.link, { attrs }, content)
}
