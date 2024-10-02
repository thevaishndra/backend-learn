require('dotenv').config()
const express = require("express");//require express module
const app = express();
const port = 3000;//where the server will listen

const githubData = {
  login: "thevaishndra",
  id: 124268459,
  node_id: "U_kgDOB2gvqw",
  avatar_url: "https://avatars.githubusercontent.com/u/124268459?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/thevaishndra",
  html_url: "https://github.com/thevaishndra",
  followers_url: "https://api.github.com/users/thevaishndra/followers",
  following_url:
    "https://api.github.com/users/thevaishndra/following{/other_user}",
  gists_url: "https://api.github.com/users/thevaishndra/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/thevaishndra/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/thevaishndra/subscriptions",
  organizations_url: "https://api.github.com/users/thevaishndra/orgs",
  repos_url: "https://api.github.com/users/thevaishndra/repos",
  events_url: "https://api.github.com/users/thevaishndra/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/thevaishndra/received_events",
  type: "User",
  site_admin: false,
  name: "Vaishnavi Chandra",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: "I do web dev ⋆.⭒⋆🪴⋆˚.⋆\r\n",
  twitter_username: "thevaishndra",
  public_repos: 10,
  public_gists: 0,
  followers: 4,
  following: 7,
  created_at: "2023-02-02T13:03:18Z",
  updated_at: "2024-10-01T10:55:35Z",
};

app.get("/", (req, res) => {//home route, callback => we will take the request and send response
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("vaishnavi");
});

app.get("/login", (req, res) => {
  res.send('<h1>please login twitter account</h1>');
});

app.get("/github", (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
//our app is constantly listening
