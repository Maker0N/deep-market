import axios from 'axios'
import config from '../config.json'

const httpCart = axios.create({
  baseURL: `${config.apiEndPoint}/products/`,
})

async function addItem(itemId) {
  const { item } = await httpCart.get(`${itemId}`)
  return item
}

export default addItem
