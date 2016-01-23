import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import Title from 'components/Title'
import Text from 'components/Text'
import Link from 'components/Link'
import Markdown from 'components/Markdown'


const link = 'На сайте мероприятия'

const text = `
something
- Алексей Красноперов - Promises - всё, я обещаю
- Сергей Андреев - Как мы дошли до БЭМ
- Вячеслав Зайцев - NPM в подробностях
- **bold**
- _italic_
- 'test'
- "test"
- [todo](/todo)
- [something](/something)
- [vk](https://vk.com)
`

function ImportantEvent(props) {
  return (
    <div styleName='event'>
      <Title size='s'>Четвертая встреча Front-End разработчиков</Title>
      <Text>
        <Markdown>{text}</Markdown>
      </Text>
      <Link>{link} ⥱</Link>
    </div>
  )
}


export default CSSModules(ImportantEvent, styles)
