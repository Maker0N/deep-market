const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'

const setTokens = (accessToken, refreshToken, userId, expiresIn = 60) => {
  const expiresDate = Date.now() + expiresIn * 1000
  localStorage.setItem(TOKEN_KEY, accessToken)
  localStorage.setItem(REFRESH_KEY, refreshToken)
  localStorage.setItem(USERID_KEY, userId)
  localStorage.setItem(EXPIRES_KEY, expiresDate)
}

export const removeAuthData = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_KEY)
  localStorage.removeItem(USERID_KEY)
  localStorage.removeItem(EXPIRES_KEY)
}

export default setTokens
