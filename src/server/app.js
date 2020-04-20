const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.get("/secret", (req, res) => {
  return res.send(process.env.SECRET || "no secret");
});

module.exports = app;
