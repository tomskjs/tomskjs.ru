import { h1, h2, h3, h4 } from '@cycle/dom'
import { HyperScriptHelperFn } from '@cycle/dom/lib/hyperscript-helpers'

import { Content } from '../../types'
import * as css from '../../utils/css'

import * as styles from './styles.css'

type TitleSize
  = 'L'
  | 'M'
  | 'S'
  | 'XS'

interface TitleProps {
  size?: TitleSize,
  tag?: HyperScriptHelperFn,
}

function getTagBySize(size: TitleSize): HyperScriptHelperFn {
  switch (size) {
    case 'L': return h1
    case 'M': return h2
    case 'S': return h3
    case 'XS': return h4
  }
}

export function Title(content: Content, { size = 'M', tag }: TitleProps = {}) {
  const resultTag = tag || getTagBySize(size)
  const className = css.merge(
    styles.title,
    size === 'L' && styles.sizeL,
    size === 'M' && styles.sizeM,
    size === 'S' && styles.sizeS,
    size === 'XS' && styles.sizeXS,
  )
  return resultTag(className, content)
}
