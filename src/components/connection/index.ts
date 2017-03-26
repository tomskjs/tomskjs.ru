import { div } from '@cycle/dom'

import * as css from '../../utils/css'
import { Link } from '../link/'

import * as styles from './styles.css'
const styl = css.dotify(styles)

// function separator() {
//   return hr(styl.separator)
// }

export function Connection() {
  return div(styl.connection, [
    'Вступайте в ', Link('группу «Вконтакте»', { href: 'https://vk.com/tomskjs' }),
    ' и ', Link('Facebook', { href: 'https://facebook.com/tomskjs' }),
    ', читайте ', Link('@tomskjs в Twitter', { href: 'https://twitter.com/tomskjs' }),
    '. Добавляйтесь в ', Link('Slack', { href: 'http://slack.tomskjs.ru' }),
    ' для живого общения.',
  ])
}
