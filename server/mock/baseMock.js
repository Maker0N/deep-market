const axios = require('axios')

async function getMockData() {
  const marketData = await axios('https://fakestoreapi.com/products')
  const productData = marketData.data.map((prod) => ({ ...prod, ...prod.rating }))
  return productData
}

module.exports = getMockData
