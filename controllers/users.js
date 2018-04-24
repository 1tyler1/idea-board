const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
<<<<<<< HEAD
  User.find().then(users => {
    console.log("USERS LISTED", users)
    res.json(users)
  })
  .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
  newUser.save().then((user) => {
    res.json(user)
  }).catch(console.log)
=======
  User.find()
    .then(users => {
      console.log("SENDING USERS", users)
      res.json(users)
    })
    .catch((err) => console.log(err))
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
})

module.exports = router