# OAuth Server

Just a quick little server relying on [Max Ogden + Pals github-oauth package](https://www.npmjs.com/package/github-oauth).

## Deploying

```
git clone https://github.com/nteract/nteract-oauth
npm install -g now
now
now secrets add github_secret "insert secret here"
now secrets add github_client_id "insert client id here"
now -e GITHUB_CLIENT=@github_client_id
now -e GITHUB_SECRET=@github_secret
now alias set (clipboard copy) nteract-oauth.now.sh
```

