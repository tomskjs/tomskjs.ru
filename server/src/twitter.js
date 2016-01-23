import Twitter from 'twitter'
import config from '../get-config'

const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET,
})

export const getTweet = tweetId => {
  return new Promise((resolve, reject) => {
    client.get('statuses/oembed', { id: tweetId }, (err, data) => {
      if (err) reject(err)
      resolve({
        ...data,
        tweetId,
      })
    })
  })
}

export const getTweets = tweetIds => {
  if (!tweetIds) throw new Error('No tweet ids specified')
  return Promise.all(tweetIds.map(id => getTweet(id)))
}
