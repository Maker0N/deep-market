/* eslint-disable no-underscore-dangle */
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

const initialState = { cart: [] }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const item = action.payload
      const cartItemQuant = 1
      item.quant = cartItemQuant
      if (!state.cart.length) {
        return { ...state, cart: [...state.cart, { ...item, quant: cartItemQuant }] }
      }
      let isIncludesItem = false
      state.cart.forEach((prod) => {
        if (prod._id === item._id) {
          isIncludesItem = true
        }
      })
      if (isIncludesItem) {
        const cartState = state.cart.map((it) => (it._id === item._id
          ? { ...it, quant: it.quant + 1 }
          : it))
        isIncludesItem = false
        return { ...state, cart: cartState }
      }
      return { ...state, cart: [...state.cart, { ...item, quant: cartItemQuant }] }
    }

    default:
      return state
  }
}

export function addItemToCart(payload) {
  return { type: ADD_ITEM_TO_CART, payload }
}

export default cartReducer
