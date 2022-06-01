/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import axios from 'axios'
import { toast } from 'react-toastify'
import setTokens from './localStorage.service'
import configFile from '../config.json'
import authService from './auth.service'

const http = axios.create({
  baseURL: configFile.apiEndPoint,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(async (requestConfig) => {
  const config = requestConfig
  const expiresDate = localStorage.getItem('jwt-expires')
  const refreshToken = localStorage.getItem('jwt-refresh-token')
  if (refreshToken && Number(expiresDate) < Date.now()) {
    await authService.refresh(refreshToken)
      .then((res) => {
        setTokens(
          res.accessToken, res.refreshToken, res.userId, res.expiresIn,
        )
      })
  }
  const accessToken = localStorage.getItem('jwt-token')
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    }
  }
  return config
},
(error) => Promise.reject(error))

http.interceptors.response.use((responseConfig) => {
  const config = responseConfig
  return config
},
(error) => {
  // const { config } = error
  // if (error.response.status === 401 && !config._retry) {
  //   config._retry = true
  //   console.log('Refresh token')
  //   return authService.refresh(localStorage.getItem('jwt-refresh-token'))
  //     .then((res) => {
  //       console.log(res)
  //       setTokens(
  //         res.accessToken, res.refreshToken, res.userId, res.expiresIn,
  //       )
  //       const { accessToken } = res
  //       axios.defaults.headers.common['x-access-token'] = `Bearer ${accessToken}`
  //       return axios(config)
  //     })
  // }

  const expectedErrors = error.response
    && error.response.status >= 400
    && error.response.status < 500;

  if (!expectedErrors) {
    toast.error('Somthing was wrong. Try it later')
  }
},
(error) => Promise.reject(error))

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
}

export default httpService
