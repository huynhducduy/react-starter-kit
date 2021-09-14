import refreshAuth from 'auth/refreshAuth'
import axios from 'axios'
import * as authHelpers from '../auth/helpers'

import type { Method, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'

const axiosApiInstance = axios.create({
  timeout: 0,
})

function getDefaultHeaders() {
  const headers: Record<string, string> = {}

  headers['Content-Type'] = 'application/json'
  headers['Accept'] = 'application/json'

  const access_token = authHelpers.getAccessToken()
  if (access_token !== null && !authHelpers.tokenIsExpired)
    headers.Authorization = `Bearer ${access_token}`

  return headers
}

async function getNewAccessTokenIfNeeded(): Promise<boolean> {
  if (authHelpers.tokenIsAlmostExpired() || !authHelpers.getAccessToken()) {
    if (!authHelpers.getRefreshToken()) {
      authHelpers.clearAuth()
      return false
    } else {
      try {
        await refreshAuth()
        return true
      } catch (e) {
        authHelpers.clearAuth()
        return false
      }
    }
  }
  return false
}

axiosApiInstance.interceptors.request.use(
  async (conf) => {
    await getNewAccessTokenIfNeeded()
    conf.headers = { // eslint-disable-line
      ...getDefaultHeaders(),
      ...conf.headers,
    }
    return conf
  },
  (error) => {
    void Promise.reject(error)
  }
)

axiosApiInstance.interceptors.response.use(
  (res) => {
    return res
  },
  async function (error) {
    const originalConfig = error.config // eslint-disable-line
    if (error.response.status === 401 && !originalConfig._retry) { // eslint-disable-line
      if (await getNewAccessTokenIfNeeded()) {
        originalConfig._retry = true // eslint-disable-line
        return axiosApiInstance(originalConfig)
      }
    }
    return Promise.reject(error)
  }
)
interface RequestParams extends AxiosRequestConfig {
  to: string
  method?: Method
  data?: Record<string, never>
  params?: Record<string, unknown>
  headers?: Record<string, string>
  withCredentials?: boolean
  cancelable?: boolean
  setCanceler?: (c: Canceler) => void
}

export default async function request<Res>({
  to,
  method = 'GET',
  data,
  params,
  headers,
  withCredentials = true,
  cancelable = false,
  setCanceler,
  ...custom
}: RequestParams): Promise<AxiosResponse<Res>> {
  const s = axios.CancelToken.source()

  if (cancelable && typeof setCanceler === 'function') {
    setCanceler(s.cancel)
  }

  return axiosApiInstance.request({
    headers,
    url: to,
    method,
    data,
    params,
    withCredentials,
    ...(cancelable ? { cancelToken: s.token } : {}),
    ...custom,
  })
}
