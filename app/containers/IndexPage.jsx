import React, { Component } from 'react'
import About from 'components/About'
import Section from 'components/Section'
import Title from 'components/Title'
import Text from 'components/Text'

export default class TestPage extends Component {
  render() {
    return (
      <div>
        <About />
        <Section>
          <Title>Наши цели</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>

          <Title>Участие</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
        </Section>
      </div>
    )
  }
}
