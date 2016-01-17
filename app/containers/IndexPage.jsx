import React, { Component } from 'react'
import Logo from 'components/Logo'
import Title from 'components/Title'
import Text from 'components/Text'
import Link from 'components/Link'


export default class TestPage extends Component {
  render() {
    return (
      <div>
        <div style={{ float: 'left' }}><Logo /></div>
        <Title size='l'>Title</Title>
        <Text size='l'>Text</Text>
        <Link href='/todo'><Text>todo</Text></Link>
      </div>
    )
  }
}
