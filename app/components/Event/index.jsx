import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import Title from 'components/Title'
import Text from 'components/Text'
import Link from 'components/Link'
import Markdown from 'components/Markdown'


const link = 'На сайте мероприятия'

const text = `
- Алексей Красноперов - Promises - всё, я обещаю
- Сергей Андреев - Как мы дошли до БЭМ
- Вячеслав Зайцев - NPM в подробностях
`

function Event(props) {
  return (
    <div styleName='event'>
      <Title size='xs' compact>Четвертая встреча Front-End разработчиков</Title>
      <Text size='s'>
        <Markdown>{text}</Markdown>
        <Link to='/link'>{link}</Link>
      </Text>
    </div>
  )
}


export default CSSModules(Event, styles)
