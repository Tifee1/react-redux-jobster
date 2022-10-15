import { checkForUnauthorizedRequest, customFetch } from '../../utils/axios'

export const getJobsThunk = async (_, thunkApi) => {
  try {
    const { status, jobType, page, search, sort } = thunkApi.getState().allJobs
    let url = `/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`
    if (search) {
      url = url + `&search=${search}`
    }
    const resp = await customFetch.get(url)
    return resp.data
  } catch (error) {
    checkForUnauthorizedRequest(error, thunkApi)
  }
}

export const getStatsThunk = async (_, thunkApi) => {
  try {
    const resp = await customFetch.get('/jobs/stats')

    return resp.data
  } catch (error) {
    checkForUnauthorizedRequest(error, thunkApi)
  }
}
