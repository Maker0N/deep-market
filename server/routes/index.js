const express = require('express')

const router = express.Router({ mergeParams: true })
router.use('/products', require('./product.routes'))

module.exports = router
