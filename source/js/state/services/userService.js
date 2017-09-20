import { post } from 'state/services/http'

const USER_LOGIN_URL = '/login'

export const loginUser = (data) => post({
  endpoint: USER_LOGIN_URL,
  data,
}).then((res) => res).catch((err) => err)
