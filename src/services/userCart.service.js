import axios from 'axios'
import config from '../config.json'

const httpCart = axios.create({
  baseURL: `${config.apiEndPoint}/userCart`,
})

export const getCart = async (userId) => {
  const { data } = await httpCart.get(`/${userId}`)
  return data
}

const addCart = async (userCart) => {
  const user = localStorage.getItem('user-local-id')
  const userCartDb = {
    userCart,
    user,
  }
  const { data } = await httpCart.post('/', { userCartDb })
  return data
}

export default addCart
