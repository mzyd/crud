import express from 'express'
import mongodb from 'mongodb'
/* const express = require('express') */

const dbUrl = "mongodb://localhost"

const app = express()

mongodb.MongoClient.connect(dbUrl, (err, client) => {
  if (err) throw err
  const db = client.db('crud')
  app.get('/api/games', (req, res) => {
    db.collection('games')
      .find({})
      .toArray((err, games) => {
        res.json({ games })
      })
  })
  app.listen(8080, () => console.log('server has running at localhost:8080'))
})
