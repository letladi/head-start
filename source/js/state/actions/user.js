export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const VERIFY_USER_SESSION = 'VERIFY_USER_SESSION'
export const VERIFY_USER_SESSION_SUCCESS = 'VERIFY_USER_SESSION_SUCESS'
export const VERIFY_USER_SESSION_ERROR = 'VERIFY_USER_SESSION_ERROR'

export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

export const loginUser = (data) => ({
  type: LOGIN_USER,
  data,
})

export const verifyUserSession = () => ({
  type: VERIFY_USER_SESSION,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

