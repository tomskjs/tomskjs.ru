import React, { Component } from 'react'
import Layout from 'components/Layout'
import About from 'components/About'
import Section from 'components/Section'
import Title from 'components/Title'
import Text from 'components/Text'
import ImportantEvent from 'components/ImportantEvent'
import Tweets from 'components/Tweets'

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <About />
          <Section>
            <Title size='s'>Наши цели</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>

            <Title size='s'>Участие</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
            <Title>События</Title>
          </Section>
          <ImportantEvent />
        </Layout>
        <Tweets />
      </div>
    )
  }
}
