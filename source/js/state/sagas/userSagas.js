import { call, put, takeEvery } from 'redux-saga/effects'

import { LOCAL_USER_STATE } from 'constants/names'

import * as userActions from 'state/actions/user'

import { loginUser } from 'state/services/userService'

function* performUserLogin({ data }) {
  try {
    const loginRes = yield call(loginUser, data)

    if (loginRes.status == 200) {
      const returnedData = loginRes.data
      localStorage.setItem(LOCAL_USER_STATE, JSON.stringify({
        token: returnedData.token,
        user: returnedData.user,
      }))
      yield put({ type: userActions.LOGIN_USER_SUCCESS, userInfo: loginRes.data })
    } else {
      yield put({ type: userActions.LOGIN_USER_ERROR, message: loginRes.response.data.message })
    }
  } catch (e) {
    yield put({ type: userActions.LOGIN_USER_ERROR })
  }
}

function* verifySession() {
  try {
    const userInfo = JSON.parse(localStorage.getItem(LOCAL_USER_STATE))

    if (userInfo) {
      yield put({ type: userActions.VERIFY_USER_SESSION_SUCCESS, userInfo })
    } else {
      yield put({ type: userActions.VERIFY_USER_SESSION_ERROR })
    }
  } catch (e) {
    yield put({ type: userActions.VERIFY_USER_SESSION_ERROR })
  }
}

function* logoutUser() {
  yield localStorage.setItem(LOCAL_USER_STATE, null)
}

function* watchUserLogin() {
  yield takeEvery(userActions.LOGIN_USER, performUserLogin)
}

function* watchSessionVerification() {
  yield takeEvery(userActions.VERIFY_USER_SESSION, verifySession)
}

function* watchUserLogout() {
  yield takeEvery(userActions.LOGOUT_USER, logoutUser)
}

export default [
  watchUserLogin,
  watchSessionVerification,
  watchUserLogout,
]
