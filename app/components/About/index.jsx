import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import Logo from 'components/Logo'
import Title from 'components/Title'
import Text from 'components/Text'
import Link from 'components/Link'
import GithubCorner from 'react-github-corner'


function About(props) {
  return (
    <section styleName='about'>
      <div styleName='logo'>
        <Logo />
      </div>
      <div styleName='title'>
        <Title size='l'>TomskJS</Title>
      </div>
      <div styleName='text'>
        <Text size='l'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis <Link href='/link'>Link</Link> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </div>
      <div styleName='github'>
        <GithubCorner
          bannerColor='#009e51'
          href='https://github.com/tomskjs/tomskjs.ru'
          width={120}
          height={120}
        />
      </div>
    </section>
  )
}

export default CSSModules(About, styles)
