const FEED_ENV = process.env.FEED_ENV
const BRANCH = process.env.BRANCH || 'master'

let feedEnv
switch (FEED_ENV) {
  case 'PROD':
    feedEnv = 'http://example.com/api'
    break

  case 'STAGING':
    feedEnv = `http://${BRANCH.toLowerCase()}.example.com/api`
    break

  default:
    feedEnv = 'http://localhost:3000/api'
    break
}

module.exports = {
  env: {
    feedEnv: feedEnv
  },
  devIndicators: {
    autoPrerender: false
  }
}
