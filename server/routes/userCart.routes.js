const express = require('express')
const UserCart = require('../models/UserCart')
const auth = require('../middleware/auth.middleware')

const router = express.Router({ mergeParams: true })

router.get('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params
    const userCart = await UserCart.find({ user: userId })
    res.send(userCart)
  } catch (error) {
    res.status(500).json({
      message: 'Error on server. Try leter',
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const userId = req.body.userCartDb.user
    let userCart = await UserCart.findOne({ user: userId })
    if (!userCart) {
      const newUserCart = await UserCart.create(req.body.userCartDb)
      res.status(201).send(newUserCart)
    }
    userCart = await UserCart.findOneAndReplace({ user: userId }, req.body.userCartDb)
    res.send(userCart)
  } catch (error) {
    res.status(500).json({
      message: 'Error on server. Try leter',
    })
  }
})

module.exports = router
