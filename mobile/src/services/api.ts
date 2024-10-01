import { AppError } from '@utils/AppError'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.50.248:3333',
})

api.interceptors.response.use(
  response => response,
  error => {
    const errorMessage = error.response?.data?.message || error
    return Promise.reject(new AppError(errorMessage))
  }
)

export { api }