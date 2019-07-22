/* Server code comes from https://www.npmjs.com/package/github-oauth */
if (!process.env["GITHUB_CLIENT"] || !process.env["GITHUB_SECRET"]) {
  throw new Error(
    "Required github credentials are not set, fix up the deployment for https://github.com/nteract/oauth-server"
  );
}

const githubOAuth = require("github-oauth")({
  githubClient: process.env["GITHUB_CLIENT"],
  githubSecret: process.env["GITHUB_SECRET"],
  baseURL: process.env["BASE_URL"] || "https://oauth.nteract.io",
  loginURI: "/github",
  callbackURI: "/callback",
  scope: "gist" // perhaps we should include user email too
});

require("http")
  .createServer(function(req, res) {
    if (req.url.match(/github/)) return githubOAuth.login(req, res);
    if (req.url.match(/callback/)) return githubOAuth.callback(req, res);
    res.writeHead(303, {
      Location: "https://github.com/nteract/oauth-server",
      Denver: "is pretty cool"
    });
    res.end(); // Close all other connection paths.
  })
  .listen();

githubOAuth.on("token", function(token, serverResponse) {
  serverResponse.end(JSON.stringify(token));
});

githubOAuth.on("error", function(err) {
  console.error("there was a login error", err);
});
