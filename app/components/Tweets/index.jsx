import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import { connect } from 'react-refetch'
import getScript from 'getscript-promise'


const fetches = props => ({
  tweetsFetch: {
    url: '/tweets',
    method: 'POST',
    body: JSON.stringify({
      tweetIds: [
        '678972492917178373',
        '671317476999843841',
        '690463015536324609',
        '689928073236627457',
      ],
    }),
  },
})

@connect(fetches)
@CSSModules(styles)
export default class Tweets extends Component {
  constructor(props) {
    super(props)
    this.tweetsLoaded = false
  }

  componentDidUpdate() {
    if (!this.tweetsLoaded) {
      this.tweetsLoaded = true
      getScript('//platform.twitter.com/widgets.js').then(() => {
        twttr.widgets.load()
      })
    }
  }

  render() {
    const { tweetsFetch } = this.props

    if (tweetsFetch.pending) {
      return <h1>'loading...'</h1>
    }

    if (tweetsFetch.rejected) {
      console.log(tweetsFetch.reason)
      return <h1>{tweetsFetch.reason.toString()}</h1>
    }

    if (tweetsFetch.fulfilled) {
      const tweets = tweetsFetch.value.map(tweet => {
        return (
          <div
            styleName='tweet'
            key={tweet.tweetId}
            dangerouslySetInnerHTML={{ __html: tweet.html }}
          />
        )
      })
      return (
        <div styleName='tweets'>
          {tweets}
        </div>
      )
    }
  }
}

Tweets.propTypes = {
  tweetsFetch: PropTypes.array,
}
