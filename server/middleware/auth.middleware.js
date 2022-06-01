const tokenService = require('../services/token.service')

module.exports = (req, res, next) => {
  if (req.method === 'OPTION') {
    return next()
  }
  try {
    const tokenAccess = req.headers.authorization.split(' ')[1]
    if (!tokenAccess) {
      return res.status(401).json({ message: 'Unauthorized!1' })
    }
    const data = tokenService.validateAccess(tokenAccess)
    if (!data) {
      return res.status(401).json({ message: 'Unauthorized!2' })
    }
    req.user = data
    return next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized!3' })
  }
}
