const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/Token')

function generate(payload) {
  const accessToken = jwt.sign(payload, config.get('accessSecret'), { expiresIn: '1h' })
  const refreshToken = jwt.sign(payload, config.get('refreshSecret'))
  return {
    accessToken,
    refreshToken,
    expiresIn: 3600,
  }
}

async function save(user, refreshToken) {
  const data = await Token.findOne({ user })
  if (data) {
    data.refreshToken = refreshToken
    return data.save()
  }
  const token = Token.create({ user, refreshToken })
  return token
}

function validateRefresh(refreshToken) {
  try {
    return jwt.verify(refreshToken, config.get('refreshSecret'))
  } catch (error) {
    return null
  }
}

async function findToken(refreshToken) {
  try {
    return Token.findOne({ refreshToken })
  } catch (error) {
    return null
  }
}

const tokenService = {
  generate,
  save,
  validateRefresh,
  findToken,
}

module.exports = tokenService
