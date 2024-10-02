require('dotenv').config()
const express = require("express");//require express module
const app = express();
const port = 3000;//where the server will listen

app.get("/", (req, res) => {//home route, callback => we will take the request and send response
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("vaishnavi");
});

app.get("/login", (req, res) => {
  res.send('<h1>please login twitter account</h1>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
//our app is constantly listening
