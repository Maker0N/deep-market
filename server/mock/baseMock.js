const axios = require('axios')

async function getMockData() {
  const marketData = await axios('https://fakestoreapi.com/products')
  return marketData.data
}

module.exports = getMockData