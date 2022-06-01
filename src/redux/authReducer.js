import setTokens from '../services/localStorage.service'

const LOGGED_USER = 'LOGGED_USER'
const LOG_OUT = 'LOG_OUT'

const initialState = {
  login: '',
  name: '',
  avatar: '',
  isLogged: false,
  isAdmin: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_USER:
      return {
        ...state,
        login: action.payload.login,
        name: action.payload.name,
        avatar: action.payload.avatar,
        isLogged: true,
      }
    case LOG_OUT:
      return {
        ...state,
        login: '',
        name: '',
        avatar: '',
        isLogged: false,
      }
    default:
      return state
  }
}

export function loggedUser(payload) {
  setTokens(payload.accessToken, payload.refreshToken, payload.userId, payload.expiresIn)
  return ({ type: LOGGED_USER, payload })
}

export function logOut() {
  return { type: LOG_OUT }
}

export default reducer
