const categories = require('./data/categories.json')
const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hi from dragon sever");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port);