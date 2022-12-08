const express = require('express');
const router = express.Router()
const postControllers = require('../controllers/controllers.post')

router.get('/allData' , postControllers.allData)
router.post('/createPost' , postControllers.createPost)

module.exports = router
 