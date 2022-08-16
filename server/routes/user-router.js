const express = require('express')

const UsersCtrl = require('../controllers/user-ctrl')

const router = express.Router()

// router.post('/beat', BeatsCtrl.createBeat)
router.put('/user/:id', UsersCtrl.updateUser)
// router.delete('/beat/:id', BeatsCtrl.deleteBeat)
router.get('/user/:id', UsersCtrl.getUserById)

module.exports = router