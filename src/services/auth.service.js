import axios from 'axios'
import config from '../config.json'

const httpAuth = axios.create({
  baseURL: `${config.apiEndPoint}/auth/`,
})

const authService = {
  refresh: async (refreshToken) => {
    const { data } = await httpAuth.post('token', { refreshToken })
    return data
  },
}

export default authService
