const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  User.find().then(users => {
    console.log("USERS LISTED", users)
    res.json(users)
  })
  .catch((err) => console.log(err))
})

module.exports = router