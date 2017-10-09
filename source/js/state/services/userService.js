import http from 'state/services/http'
import { USER_SIGNUP_URL, USER_LOGIN_URL } from 'constants/urls'

export const loginUser = (data) => http.post(USER_LOGIN_URL, data).then((res) => {
  if (res.status == 200) {
    const { token } = res.data
    http.defaults.headers.common.Authorization = `Bearer ${ token }`
  }
  return res
})
.catch((err) => err)

export const registerUser = (data) => http.post(USER_SIGNUP_URL, data).then((res) => {
  return res
})
.catch((err) => err)
