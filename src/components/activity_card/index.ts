import { header, article } from '@cycle/dom'

import { Content } from '../../types'
import * as css from '../../utils/css'
import { Title } from '../title'
import { Text } from '../text'

import * as styles from './styles.css'
const styl = css.dotify(styles)

interface ActivityProps {
  title: Content,
  text: Content,
}

export function Activity(props: ActivityProps) {
  return article(styl.activity, [
    header(styl.title, [
      Title(props.title, { size: 'XS' }),
    ]),
    Text(props.text, { size: 'S' }),
  ])
}
