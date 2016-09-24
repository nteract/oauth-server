/* Server code comes from https://www.npmjs.com/package/github-oauth */
const githubOAuth = require('github-oauth')({
  githubClient: process.env['GITHUB_CLIENT'],
  githubSecret: process.env['GITHUB_SECRET'],
  baseURL: process.env['BASE_URL'] || 'https://nteract-oauth.now.sh',
  loginURI: '/github',
  callbackURI: '/callback',
  scope: 'gist' // perhaps we should include user email too
})

require('http').createServer(function(req, res) {
  if (req.url.match(/github/)) return githubOAuth.login(req, res)
  if (req.url.match(/callback/)) return githubOAuth.callback(req, res)
  res.end(); // Close all other connection paths.
}).listen(80)

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
  console.log('here is your shiny new github oauth token', token)
  serverResponse.end(JSON.stringify(token))
})
