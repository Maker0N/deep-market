import { createStore, combineReducers } from 'redux'
import authReducer from './authReducer'

const reducers = combineReducers({
  authReducer,
})

const store = createStore(reducers)

export default store
