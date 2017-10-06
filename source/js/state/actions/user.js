export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const VERIFY_USER_SESSION = 'VERIFY_USER_SESSION'
export const VERIFY_USER_SESSION_SUCCESS = 'VERIFY_USER_SESSION_SUCESS'
export const VERIFY_USER_SESSION_ERROR = 'VERIFY_USER_SESSION_ERROR'

export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

export const SHOW_ACCOUNT_MODAL = 'SHOW_ACCOUNT_MODAL'
export const HIDE_ACCOUNT_MODAL = 'HIDE_ACCOUNT_MODAL'
export const SHOW_ALTERNATE_ACCOUNT_MODAL = 'SHOW_ALTERNATE_ACCOUNT_MODAL'

export const loginUser = (data) => ({
  type: LOGIN_USER,
  data,
})

export const verifyUserSession = () => ({
  type: VERIFY_USER_SESSION,
})

export const verifyUserSessionSuccess = (userInfo) => ({
  type: VERIFY_USER_SESSION_SUCCESS,
  userInfo,
})

export const verifyUserSessionError = () => ({
  type: VERIFY_USER_SESSION_ERROR,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

export const showAccountModal = (modalInfo) => ({
  type: SHOW_ACCOUNT_MODAL,
  modalInfo,
})

export const hideAccountModal = () => ({
  type: HIDE_ACCOUNT_MODAL,
})

