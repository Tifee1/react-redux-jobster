import axios from 'axios'
// import { clearAllValues } from '../features/user/userSlice'
import { getLocalStorage } from './localStorage'

export const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

customFetch.interceptors.request.use((config) => {
  const user = getLocalStorage()
  if (user) {
    config.headers.common['Authorization'] = `Bearer ${user.token}`
  }
  return config
})

// export const checkForUnauthorizedRequest = (error, thunkApi) => {
//   if (error.response.status === 401) {
//     thunkApi.dispatch(clearAllValues('Unauthorized Request, Logging out...'))
//     return thunkApi.rejectWithValue(error.response.data.msg)
//   }
//   return thunkApi.rejectWithValue(error.response.data.msg)
// }
