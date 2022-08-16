const express = require('express')

const BeatsCtrl = require('../controllers/ecg-ctrl')

const router = express.Router()

// router.post('/beat', BeatsCtrl.createBeat)
router.put('/beat/:id', BeatsCtrl.updateBeat)
// router.delete('/beat/:id', BeatsCtrl.deleteBeat)
router.get('/beat/:id', BeatsCtrl.getBeatById)
router.get('/beats', BeatsCtrl.getBeats)
router.get('/beatsO', BeatsCtrl.getBeatsInOrder)
router.get('/beatbyIndex/:index', BeatsCtrl.getBeatByIndex)
router.get('/counts', BeatsCtrl.getAllnumber)


module.exports = router