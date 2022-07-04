import httpServise from './http.service'

const cartEndPoint = '/userCart/'

export async function getCart(userId) {
  if (!userId) {
    const data = []
    return data
  }
  const { data } = await httpServise.get(`${cartEndPoint}${userId}`)
  return data
}

async function addCart(userCart) {
  const user = localStorage.getItem('user-local-id')
  const userCartDb = {
    userCart,
    user,
  }
  const { data } = await httpServise.post(cartEndPoint, { userCartDb })
  return data
}

export default addCart
