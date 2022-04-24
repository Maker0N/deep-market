const express = require('express')
const Product = require('../models/Product')

const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Product.find()
    res.status(200).send(list)
  } catch (error) {
    res.status(500).json({
      message: 'Error on server. Try leter',
    })
  }
})

router.get('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params
    const item = await Product.findById(itemId)
    res.send(item)
  } catch (error) {
    res.status(500).json({
      message: 'Error on server. Try leter',
    })
  }
})

module.exports = router
