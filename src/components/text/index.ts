import { p, VNode } from '@cycle/dom'
import { HyperScriptHelperFn } from '@cycle/dom/lib/hyperscript-helpers'
import * as css from '../../utils/css'

import * as styles from './styles.css'

type TextSize
  = 'S'
  | 'M'
  | 'L'

interface TitleProps {
  size?: TextSize,
  tag?: HyperScriptHelperFn,
}


export function Text(content: string | Array<VNode>, { size = 'M', tag = p }: TitleProps = {}) {
  const className = css.merge(
    styles.text,
    size === 'S' && styles.sizeS,
    size === 'M' && styles.sizeM,
    size === 'L' && styles.sizeL,
  )
  return tag(className, content)
}
