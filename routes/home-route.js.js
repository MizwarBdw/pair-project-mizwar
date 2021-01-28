const express = require('express')
const router = express.Router()
const Controller = require('../controllers/home-post-event-control')

router.get('/home', Controller.getHomepage)

module.exports = router