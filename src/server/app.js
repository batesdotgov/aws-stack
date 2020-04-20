const express = require("express");
const knexConfig = require("../../knexfile");

const db = knex(knexConfig);

const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.get("/secret", (req, res) => {
  return res.send(process.env.SECRET || "no secret");
});

app.get("/users", async (req, res) => {
  const users = await db("users");
  return res.json({ users });
});

module.exports = app;
