/* eslint-disable no-param-reassign */
const Product = require('../models/Product')
const getMockData = require('../mock/baseMock')

async function createInitialEntity(Model, data) {
  return Promise.all(
    data.map(async (item) => {
      if (Model.collection.length) {
        await Model.collection.drop()
      }
      try {
        delete item.id
        const newItem = new Model(item)
        await newItem.save()
        return newItem
      } catch (error) {
        return error.message
      }
    }),
  )
}

module.exports = async () => {
  const products = await Product.find()
  const productsMock = await getMockData()
  if (products.length !== productsMock.length) {
    await createInitialEntity(Product, productsMock)
  }
}
