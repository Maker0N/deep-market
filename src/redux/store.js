import { createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'

const reducers = combineReducers({
  authReducer, cartReducer,
})

const store = createStore(reducers)

export default store
