const express = require('express');
const { getUserResults, updateUserData, calculateResults, resetResults } = require('../Controllers/homeController.js')
const router = express.Router()

router.get('/', getUserResults)
router.patch('/', updateUserData)
router.post('/', calculateResults)
router.patch('/:userId', resetResults)


module.exports = router



