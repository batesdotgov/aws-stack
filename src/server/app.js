const express = require('express')
const path = require('path')
const knex = require('knex')
const knexConfig = require('../../knexfile')

const db = knex(knexConfig)
const app = express()

app.get('/', (req, res) => {
  return res.send('hello world')
})

app.get('/secret', (req, res) => {
  return res.send(process.env.SECRET || 'no secret')
})

app.get('/users', async (req, res) => {
  const users = await db('users')
  return res.json({ users })
})

// # stress test
app.get('/loaderio-27c1c3d48849223b76e0e32caa0583de.txt', (req, res) => {
  return res.sendFile(
    '/src/server/loaderio-27c1c3d48849223b76e0e32caa0583de.txt',
  )
})

module.exports = app
