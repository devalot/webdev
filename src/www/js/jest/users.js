import * as api from './api'

export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const invokeDelayed = (cb, ms) => {
  setTimeout(cb, ms)
}
