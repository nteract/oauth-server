/* Server code comes from https://www.npmjs.com/package/github-oauth */
const githubOAuth = require('github-oauth')({
  githubClient: process.env['GITHUB_CLIENT_ID'], // don't fret, this is a public key
  githubSecret: process.env['GITHUB_SECRET'], // don't share this!
  baseURL: 'https://oauth.nteract.io',
  loginURI: '/github',
  callbackURI: '/callback',
  scope: 'gist' // perhaps we should include user email too
})

require('http').createServer(function(req, res) {
  if (req.url.match(/github/)) return githubOAuth.login(req, res)
  if (req.url.match(/callback/)) return githubOAuth.callback(req, res)
}).listen(80)

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
  console.log('here is your shiny new github oauth token', token)
  serverResponse.end(JSON.stringify(token))
})
