# GITHUB OAUTH SERVER
code taken from Max Ogden
https://www.npmjs.com/package/github-oauth

```
git clone https://github.com/nteract/nteract-oauth
npm install -g now
now
now secrets add github_secret "insert secret here"
now -e GITHUB_SECRET=@github_secret
now alias set (clipboard copy) oauth.nteract.io
```

_...profit_
