import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import { connect as refetch } from 'react-refetch'
import getScript from 'utils/getScript'


const fetches = props => ({
  loadTweets: () => ({
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
  }),
})

@refetch(fetches)
@CSSModules(styles)
export default class Tweets extends Component {

  static propTypes = {
    loadTweets: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadTweets()
  }

  componentDidUpdate() {
    if (!process.env.PRERENDER) {
      getScript('//platform.twitter.com/widgets.js').then(() => {
        twttr.widgets.load()
      }).catch(err => console.log(err))
    }
  }

  render() {
    const { tweetsFetch } = this.props
    if (!tweetsFetch) return null

    if (tweetsFetch.pending) {
      return <h2>'loading...'</h2>
    }

    if (tweetsFetch.rejected) {
      console.log(tweetsFetch.reason)
      return <h2>{tweetsFetch.reason.toString()}</h2>
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
