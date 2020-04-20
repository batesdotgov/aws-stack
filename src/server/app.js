const express = require("express");
const db = require("../../knexfile");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.get("/secret", (req, res) => {
  return res.send(process.env.SECRET || "no secret");
});

app.get("/users", async (req, res) => {
  return await db("users");
});

module.exports = app;
