import { checkForUnauthorizedRequest, customFetch } from '../../utils/axios'
import { getJobs, hideLoading, showLoading } from '../allJobs/allJobsSlice'
import { clearValues } from './jobsSlice'

export const createJobThunk = async (job, thunkApi) => {
  try {
    const resp = await customFetch.post('/jobs', job)
    thunkApi.dispatch(clearValues())
    return resp.data
  } catch (error) {
    checkForUnauthorizedRequest(error, thunkApi)
  }
}

export const deleteJobThunk = async (id, thunkApi) => {
  thunkApi.dispatch(showLoading())
  try {
    const resp = await customFetch.delete(`/jobs/${id}`)
    thunkApi.dispatch(getJobs())
    thunkApi.dispatch(hideLoading())
    return resp.data
  } catch (error) {
    thunkApi.dispatch(hideLoading)
    checkForUnauthorizedRequest(error, thunkApi)
  }
}

export const editJobThunk = async (job, thunkApi) => {
  try {
    const resp = await customFetch.patch(`/jobs/${job.id}`, job)
    thunkApi.dispatch(clearValues())
    return resp.data
  } catch (error) {
    checkForUnauthorizedRequest(error, thunkApi)
  }
}
