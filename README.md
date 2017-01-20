# OAuth Server

[![Greenkeeper badge](https://badges.greenkeeper.io/nteract/oauth-server.svg)](https://greenkeeper.io/)

Just a quick little server relying on [Max Ogden + Pals github-oauth package](https://www.npmjs.com/package/github-oauth).

Use **OAuth Server** for providing [Publish-to-gist](https://github.com/nteract/nteract/blob/master/src/notebook/epics/github-publish.js) functionality in **nteract** [[repo](https://github.com/nteract/nteract)].

## Deploying

```bash
git clone https://github.com/nteract/nteract-oauth
npm install -g now
now secrets add github_secret "insert secret here"
now secrets add github_client_id "insert client id here"
now -e GITHUB_CLIENT=@github_client_id -e GITHUB_SECRET=@github_secret
now alias set (clipboard copy) oauth.nteract.io
```

