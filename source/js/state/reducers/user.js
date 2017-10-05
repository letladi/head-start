import { Map } from 'immutable'

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,

  LOGOUT_USER,

  VERIFY_USER_SESSION,
  VERIFY_USER_SESSION_SUCCESS,
  VERIFY_USER_SESSION_ERROR,

} from 'state/actions/user'

export const initialState = Map({
  verifyingSession: true,
  requireLogin: false,
})

const actionsMap = {

  [VERIFY_USER_SESSION]: (state) => {
    return state.merge(Map({
      verifyingSession: true,
    }))
  },

  [VERIFY_USER_SESSION_SUCCESS]: (state, { userInfo }) => {
    return state.merge(Map({
      userInfo,
      verifyingSession: false,
    }))
  },

  [VERIFY_USER_SESSION_ERROR]: (state) => {
    return state.merge(Map({
      requireLogin: true,
      verifyingSession: false,
    }))
  },

  [LOGIN_USER]: (state) => {
    return state.merge(Map({
      loggingIn: true,
    }))
  },

  [LOGIN_USER_SUCCESS]: (state, { userInfo }) => {
    return state.merge(Map({
      loggingIn: false,
      requireLogin: false,
      userInfo,
    }))
  },

  [LOGIN_USER_ERROR]: (state) => {
    return state.merge(Map({
      loggingIn: false,
      loginFailed: true,
    }))
  },

  [LOGOUT_USER]: (state) => {
    return state.merge(Map({
      requireLogin: true,
      userInfo: void(0),
    }))
  },

}

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
