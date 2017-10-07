import { Map } from 'immutable'

import * as userActions from 'state/actions/user'

export const initialState = Map({
  verifyingSession: false,
  requireLogin: false,
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
    }))
  },

  [userActions.LOGIN_USER_SUCCESS]: (state, { userInfo }) => {
    return state.merge(Map({
      loggingIn: false,
      requireLogin: false,
      userInfo,
    }))
  },

  [userActions.LOGIN_USER_ERROR]: (state) => {
    return state.merge(Map({
      loggingIn: false,
      loginFailed: true,
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
