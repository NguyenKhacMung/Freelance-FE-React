import axios from 'axios'
import { store } from '../store'
import { userStorage } from '../storage'
import { toast } from 'react-toastify';

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'http://192.168.197.101:8089',
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
    // console.log('config', config)
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
    if (response.config.method !== "get" && !response.config.url.endsWith('/api/auth/signin/')) {
      toast.success('Successful action', { autoClose: 1000, })
    };
    return response
  },
  (error) => {
    console.log('error axios', error)
    const { config, response, message } = error;
    const { url, method } = config;
    if (response) {
      if (!url.endsWith('/api/auth/signin/') && !url.endsWith('/api/auth/signup/')) {
        switch (response.status) {
          case 400:
            toast.error(message);
            break
          case 401:
            toast.error(message);
            store.dispatch('auth/logout');
            break
          case 404:
            toast.error(message);
            break
          case 500:
            toast.error(message);
            break
          default:
            toast.error(message);
            break
        }
      }
    }
    return Promise.reject(error)
  }
)

export default instance
