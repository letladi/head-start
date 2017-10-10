import { call, put, takeEvery } from 'redux-saga/effects'
import { LOCAL_USER_STATE, ACCOUNT } from 'constants/names'

import * as userActions from 'state/actions/user'
import * as userService from 'state/services/userService'

function* performUserLogin({ data }) {
  try {
    const loginRes = yield call(userService.loginUser, data)

    if (loginRes.status == 200) {
      const returnedData = loginRes.data
      localStorage.setItem(LOCAL_USER_STATE, JSON.stringify({
        token: returnedData.token,
        user: returnedData.user,
      }))
      yield put(userActions.onUserLoginSuccess(returnedData))
      yield put(userActions.hideAccountModal())
    } else {
      yield put(userActions.onUserLoginError(loginRes.response.data.message))
    }
  } catch (e) {
    yield put(userActions.onUserLoginError(e.message))
  }
}

function* performUserRegistration({ data }) {
  try {
    const registrationRes = yield call(userService.registerUser, data)

    if (registrationRes.status == 200) {
      yield put(userActions.showAccountModal(ACCOUNT.LOGIN))
      yield put(userActions.onUserRegisterSuccess())
    } else {
      yield put(userActions.onUserRegisterError(registrationRes.response.data))
    }
  } catch (e) {
    yield put(userActions.onUserRegisterError(e.message))
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
  try {
    yield localStorage.setItem(LOCAL_USER_STATE, null)
    yield call(userService.logoutUser, null)
  } catch (e) {
    // TODO - capture logout error
  }
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

function* watchUserRegistration() {
  yield takeEvery(userActions.REGISTER_USER, performUserRegistration)
}

export default [
  watchUserLogin,
  watchSessionVerification,
  watchUserLogout,
  watchUserRegistration,
]
