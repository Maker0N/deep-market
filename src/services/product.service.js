import httpServise from './http.service'

const productsEndPoint = '/products'

async function getProducts() {
  const { data } = await httpServise.get(productsEndPoint)
  return data
}

export default getProducts
