import React, { Component } from 'react'
import Logo from 'components/Logo'
import Title from 'components/Title'
import Text from 'components/Text'
import Link from 'components/Link'
import GithubCorner from 'react-github-corner'


export default class TestPage extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ float: 'left' }}><Logo /></div>
        <Title size='l'>TomskJS</Title>
        <Text size='l'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis <Link href='/link'>Link</Link> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
        <GithubCorner
          bannerColor='#009e51'
          href='https://github.com/tomskjs/tomskjs.ru'
          width={120}
          height={120}
        />
      </div>
    )
  }
}
