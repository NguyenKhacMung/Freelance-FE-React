import axios from 'axios'
import { store } from '../store'
import { userStorage } from '../storage'

const instance = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(userStorage.getLocalStorage())?.accessToken
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    } else {
      delete instance.defaults.headers.common['Authorization']
    }
    console.log('config', config)
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log('response', response)
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.log('error', error.response.data)
          break
        case 401:
          store.dispatch('auth/logout');
          break
        case 404:
          console.error('/not-found')
          break
        case 500:
          console.error('/server-error')
          break
        default:
          console.log('error', error.response.data)
          break
      }
    }
    return Promise.reject(error)
  }
)

export default instance
