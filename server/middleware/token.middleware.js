module.exports = (req, res, next) => {
  if (req.method === 'OPTION') {
    return next()
  }
  return next()
}
