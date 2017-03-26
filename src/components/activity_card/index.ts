import { header, article, div } from '@cycle/dom'

import { Content } from '../../types'
import * as css from '../../utils/css'
import { Title } from '../title'
import { Text } from '../text'

import * as styles from './styles.css'
const styl = css.dotify(styles)

interface ActivityProps {
  title: Content,
  content: Content,
  highlighted?: boolean,
}

export function Activity({ highlighted = false, ...props }: ActivityProps) {
  const classes = css.merge(
    styles.activity,
    highlighted && styles.highlighted,
  )

  return article(classes, [
    div(styl.content, [
      header(styl.title, [
        Title(props.title, { size: 'XS' }),
      ]),
      Text(props.content, { size: 'S' }),
    ]),
  ])
}
