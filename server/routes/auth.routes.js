/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const express = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const tokenService = require('../services/token.service')
// const tokenMiddleware = require('../middleware/token.middleware')

const router = express.Router({ mergeParams: true })

router.post('/signUp', [
  check('login', 'Incorrect login (email)').isEmail(),
  check('password', 'The minimum password length must be 8 characters').isLength({ min: 8 }),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'Invalid data',
            code: 400,
            errors: errors.array(),
          },
        })
      }
      const { login, password } = req.body
      const existingUser = await User.findOne({ login })
      if (existingUser) {
        return res.status(400).json({
          error: {
            message: 'Email exists',
            code: 400,
          },
        })
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      })
      const tokens = tokenService.generate({ _id: newUser._id })
      await tokenService.save(newUser._id, tokens.refreshToken)
      res.status(201).send({ ...tokens, userId: newUser._id })
    } catch (error) {
      res.status(500).json({
        message: 'Error on server. Try leter',
      })
    }
  }])

router.post('/logIn', [
  check('login', 'Incorrect login (email) or password!').normalizeEmail().isEmail(),
  check('password', 'Incorrect login (email) or password!').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'Invalid data!',
            code: 400,
            errors: errors.array(),
          },
        })
      }
      const { login, password } = req.body
      const existingUser = await User.findOne({ login })
      if (!existingUser) {
        return res.status(400).send({
          error: {
            message: 'Account not found!',
            code: 400,
          },
        })
      }
      const isPasswordEqual = await bcrypt.compare(password, existingUser.password)
      if (!isPasswordEqual) {
        return res.status(400).send({
          error: {
            message: 'Incorrect login (email) or password!',
            code: 400,
          },
        })
      }
      const tokens = tokenService.generate({ _id: existingUser._id })
      await tokenService.save(existingUser._id, tokens.refreshToken)
      res.status(200).send({ ...tokens, userId: existingUser._id })
    } catch (error) {
      res.status(500).json({
        message: 'Error on server. Try leter',
      })
    }
  }])

router.post('/token', async (req, res) => {
  try {
    const { refreshToken } = req.body
    const data = tokenService.validateRefresh(refreshToken)
    const dbToken = await tokenService.findToken(refreshToken)
    if (!data || !dbToken || data._id !== dbToken?.user?.toString()) {
      return res.status(401).json({ message: 'Unauthorized!' })
    }
    const tokens = tokenService.generate({ _id: data._id.toString() })
    await tokenService.save(data._id, tokens.refreshToken)
    res.status(200).send({ ...tokens, userId: data._id })
  } catch (error) {
    res.status(500).json({
      message: 'Error on server. Try leter',
    })
  }
})

module.exports = router
