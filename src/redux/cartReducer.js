/* eslint-disable no-underscore-dangle */

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const GET_CART_FROM_DB = 'GET_CART_FROM_DB'

// const userId = localStorage.getItem('user-local-id')

// if (!localStorage.getItem(userId)) {
//   localStorage.setItem(userId, JSON.stringify([]))
// }
// const userCart = JSON.parse(localStorage.getItem(userId))
// const initialState = { cart: userCart }
// console.log(initialState)
const initialState = { cart: [] }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const item = action.payload
      delete item.updatedAt
      delete item.created_at
      delete item.__v
      const cartItemQuant = 1
      item.count = cartItemQuant
      if (!state.cart.length) {
        return { ...state, cart: [...state.cart, { ...item, count: cartItemQuant }] }
      }
      let isIncludesItem = false
      state.cart.forEach((prod) => {
        if (prod._id === item._id) {
          isIncludesItem = true
        }
      })
      if (isIncludesItem) {
        const cartState = state.cart.map((it) => (it._id === item._id
          ? { ...it, count: it.count + 1 }
          : it))
        isIncludesItem = false
        return { ...state, cart: cartState }
      }
      return { ...state, cart: [...state.cart, { ...item, count: cartItemQuant }] }
    }

    case GET_CART_FROM_DB:
      return { ...state, cart: action.payload }

    default:
      return state
  }
}

export function addItemToCart(payload) {
  return { type: ADD_ITEM_TO_CART, payload }
}

export function getCartFromDb(payload) {
  return { type: GET_CART_FROM_DB, payload }
}

export default cartReducer
