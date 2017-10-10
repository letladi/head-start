import { Map } from 'immutable'
import * as userActions from 'state/actions/user'
import * as messages from 'constants/messages'

export const initialState = Map({
  verifyingSession: false,
  requireLogin: false,
  formErrors: {},
})

const actionsMap = {

  [userActions.VERIFY_USER_SESSION]: (state) => {
    return state.merge(Map({
      verifyingSession: true,
    }))
  },

  [userActions.VERIFY_USER_SESSION_SUCCESS]: (state, { userInfo }) => {
    return state.merge(Map({
      userInfo,
      verifyingSession: false,
    }))
  },

  [userActions.VERIFY_USER_SESSION_ERROR]: (state) => {
    return state.merge(Map({
      requireLogin: true,
      verifyingSession: false,
    }))
  },

  [userActions.LOGIN_USER]: (state) => {
    return state.merge(Map({
      loggingIn: true,
      formMessage: 'logging you in...',
    }))
  },

  [userActions.LOGIN_USER_SUCCESS]: (state, { userInfo }) => {
    return state.merge(Map({
      loggingIn: false,
      requireLogin: false,
      userInfo,
      userFormInfo: {},
    }))
  },

  [userActions.LOGIN_USER_ERROR]: (state, { message }) => {
    return state.merge(Map({
      loggingIn: false,
      formMessage: message,
      loginFailed: true,
    }))
  },

  [userActions.REGISTER_USER]: (state) => {
    return state.merge(Map({
      registeringAccount: true,
      formMessage: messages.REGISTERING_USER_FORM_MESSAGE,
    }))
  },

  [userActions.REGISTER_USER_SUCCESS]: (state) => {
    return state.merge(Map({
      registeringAccount: false,
      formMessage: messages.USER_REGISTER_SUCCESS_MESSAGE,
    }))
  },

  [userActions.REGISTER_USER_ERROR]: (state, { data }) => {
    const { message, errors } = data
    return state.merge(Map({
      registeringAccount: false,
      formMessage: message,
      formErrors: errors,
    }))
  },

  [userActions.LOGOUT_USER]: (state) => {
    return state.merge(Map({
      requireLogin: true,
      userInfo: void(0),
    }))
  },

  [userActions.SHOW_ACCOUNT_MODAL]: (state, { modalInfo }) => {
    return state.merge(Map({
      modalInfo,
      userFormInfo: {},
      formMessage: void(0),
    }))
  },

  [userActions.HIDE_ACCOUNT_MODAL]: (state) => {
    return state.merge(Map({
      modalInfo: null,
    }))
  },

  [userActions.CAPTURE_USER_FORM_INFO]: (state, { info }) => {
    const { name, value } = info
    const userFormInfo = state.get('userFormInfo')

    return state.merge(Map({
      userFormInfo: {
        ...userFormInfo,
        [name]: value,
      },
    }))
  },

}

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
