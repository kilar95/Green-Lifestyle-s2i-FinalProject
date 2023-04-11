const express = require('express');
const { getUserResults, updateUserData, calculateResults } = require('../Controllers/homeController.js')
const router = express.Router()

router.get('/', getUserResults)
router.patch('/', updateUserData)
router.post('/', calculateResults)


module.exports = router



