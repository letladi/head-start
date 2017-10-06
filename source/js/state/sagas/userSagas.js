import { call, put, takeEvery } from 'redux-saga/effects'

import { LOCAL_USER_STATE } from 'constants/names'

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,

  LOGOUT_USER,

  VERIFY_USER_SESSION,
  VERIFY_USER_SESSION_SUCCESS,
  VERIFY_USER_SESSION_ERROR,
} from 'state/actions/user'

import { loginUser } from 'state/services/userService'

function* performUserLogin({ data }) {
  try {
    const loginRes = yield call(loginUser, data)

    if (loginRes.response && loginRes.response.status == 401) {
      yield put({ type: LOGIN_USER_ERROR })
    } else {
      localStorage.setItem(LOCAL_USER_STATE, JSON.stringify({
        ...loginRes,
        createdAt: new Date(),
      }))
      yield put({ type: LOGIN_USER_SUCCESS, userInfo: loginRes })
    }
  } catch (e) {
    yield put({ type: LOGIN_USER_ERROR })
  }
}

function* verifySession() {
  console.log('WE ARE NOW VERIFYING THE SESSION')
  try {
    const userInfo = JSON.parse(localStorage.getItem(LOCAL_USER_STATE))

    if (userInfo) {
      yield put({ type: VERIFY_USER_SESSION_SUCCESS, userInfo })
    } else {
      yield put({ type: VERIFY_USER_SESSION_ERROR })
    }
  } catch (e) {
    yield put({ type: VERIFY_USER_SESSION_ERROR })
  }
}

function* logoutUser() {
  yield localStorage.setItem(LOCAL_USER_STATE, null)
}

function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, performUserLogin)
}

function* watchSessionVerification() {
  yield takeEvery(VERIFY_USER_SESSION, verifySession)
}

function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default [
  watchUserLogin,
  watchSessionVerification,
  watchUserLogout,
]
