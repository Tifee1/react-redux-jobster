import { checkForUnauthorizedRequest, customFetch } from '../../utils/axios'
import { clearAllJobs } from '../allJobs/allJobsSlice'
import { clearValues } from '../jobs/jobsSlice'
import { logout } from './userSlice'

export const loginThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/auth/login', user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const registerThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/auth/register', user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateThunk = async (user, thunkApi) => {
  try {
    const resp = await customFetch.patch('/auth/updateUser', user)
    return resp.data
  } catch (error) {
    checkForUnauthorizedRequest(error, thunkApi)
  }
}

export const clearAllValuesThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearAllJobs())
    thunkAPI.dispatch(clearValues())
    thunkAPI.dispatch(logout(message))
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
