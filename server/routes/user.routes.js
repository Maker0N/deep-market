const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

const router = express.Router({ mergeParams: true })

router.get('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId)
    res.send(user)
  } catch (error) {
    res.status(500).json({
      message: 'Error on server. Try leter',
    })
  }
})

module.exports = router
