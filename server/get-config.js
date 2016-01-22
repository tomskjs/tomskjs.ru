const config = (() => {
  try {
    return require('./config').default
  } catch (err) {
    return {}
  }
})()

export default config
