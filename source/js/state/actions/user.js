import * as messages from 'constants/messages'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

export const VERIFY_USER_SESSION = 'VERIFY_USER_SESSION'
export const VERIFY_USER_SESSION_SUCCESS = 'VERIFY_USER_SESSION_SUCESS'
export const VERIFY_USER_SESSION_ERROR = 'VERIFY_USER_SESSION_ERROR'

export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

export const SHOW_ACCOUNT_MODAL = 'SHOW_ACCOUNT_MODAL'
export const HIDE_ACCOUNT_MODAL = 'HIDE_ACCOUNT_MODAL'

export const CAPTURE_USER_FORM_INFO = 'CAPTURE_USER_FORM_INFO'

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

export const loginUser = (data) => ({
  type: LOGIN_USER,
  data,
})

export const onUserLoginSuccess = (userInfo) => ({
  type: LOGIN_USER_SUCCESS,
  userInfo,
})

export const onUserLoginError = (message = messages.DEFAULT_LOGIN_ERROR_MESSAGE) => ({
  type: LOGIN_USER_ERROR,
  message,
})

export const registerUser = (data) => ({
  type: REGISTER_USER,
  data,
})

export const onUserRegisterSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
  message: messages.USER_REGISTER_SUCCESS_MESSAGE,
})

export const onUserRegisterError = ({
  message = messages.DEFAULT_USER_REGISTRATION_ERROR_MESSAGE, errors = {},
} = {}) => ({
  type: REGISTER_USER_ERROR,
  data: { message, errors },
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

export const captureUserFormInfo = (info) => ({
  type: CAPTURE_USER_FORM_INFO,
  info,
})
