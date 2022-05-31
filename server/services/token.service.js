const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/Token')

function generate(payload) {
  const accessToken = jwt.sign(payload, config.get('accessSecret'), { expiresIn: '1m' })
  const refreshToken = jwt.sign(payload, config.get('refreshSecret'))
  return {
    accessToken,
    refreshToken,
    expiresIn: 60,
  }
}

async function save(user, refreshToken) {
  const data = await Token.findOne({ user })
  if (data) {
    data.refreshToken = refreshToken
    return data.save()
  }
  const token = await Token.create({ user, refreshToken })
  return token
}

function validateAccess(accessToken) {
  try {
    return jwt.verify(accessToken, config.get('accessSecret'))
  } catch (error) {
    return null
  }
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
  validateAccess,
  validateRefresh,
  findToken,
}

module.exports = tokenService
