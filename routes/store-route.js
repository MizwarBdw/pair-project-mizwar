const express = require('express')
const router = express.Router()
const Controller = require('../controllers/store-control')

router.get('/stores', Controller.getStoreList)

router.get('/stores/add', Controller.getAddStore)
router.post('/stores/add', Controller.postAddStore)

router.get('/stores/edit/:id', Controller.getEditStore)
router.post('/stores/edit/:id', Controller.postEditStore)

router.get('/stores/delete/:id', Controller.getDestroyStore)

router.get('/stores/postEvent', Controller.getPostEvent)
router.post('/stores/postEvent', Controller.postEventStore)

router.get('/stores/postEvent/succes', Controller.getPostEventSucces)

module.exports = router