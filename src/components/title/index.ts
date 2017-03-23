import { h1, h2, h3, VNode } from '@cycle/dom'
import { HyperScriptHelperFn } from '@cycle/dom/lib/hyperscript-helpers'
import * as css from '../../utils/css'

import * as styles from './styles.css'

type TitleSize
  = 'S'
  | 'M'
  | 'L'

interface TitleProps {
  size?: TitleSize,
  tag?: HyperScriptHelperFn,
}

function getTagBySize(size: TitleSize): HyperScriptHelperFn {
  switch (size) {
    case 'S': return h3
    case 'M': return h2
    case 'L': return h1
  }
}

export function Title(content: string | Array<VNode>, { size = 'M', tag }: TitleProps = {}) {
  const resultTag = tag || getTagBySize(size)
  const className = css.merge(
    styles.title,
    size === 'S' && styles.sizeS,
    size === 'M' && styles.sizeM,
    size === 'L' && styles.sizeL,
  )
  return resultTag(className, content)
}
