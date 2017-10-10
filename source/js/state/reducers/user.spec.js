import { Map } from 'immutable'
import { expect } from 'chai'
import reducer, { initialState } from 'state/reducers/user'
import * as user from 'state/actions/user'
import * as messages from 'constants/messages'

describe('user reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(void(0), {})).to.eql(initialState)
  })

  it(`should reset userFormInfo for ${ user.SHOW_ACCOUNT_MODAL }`, () => {
    const modalInfo = {}
    expect(reducer(initialState, user.showAccountModal(modalInfo))).to.eql(
      initialState.merge(Map({
        modalInfo,
        userFormInfo: {},
        formMessage: void(0),
      }))
    )
  })

  it(`should handle ${ user.VERIFY_USER_SESSION }`, () => {
    expect(reducer(initialState, user.verifyUserSession())).to.eql(
      initialState.merge(Map({
        verifyingSession: true,
      }))
    )
  })

  it(`should handle ${ user.VERIFY_USER_SESSION_SUCCESS }`, () => {
    const userInfo = { token: 'some-token' }
    expect(reducer(initialState, user.verifyUserSessionSuccess(userInfo))).to.eql(
      initialState.merge(Map({
        verifyingSession: false,
        userInfo,
      }))
    )
  })

  it(`should handle ${ user.VERIFY_USER_SESSION_ERROR }`, () => {
    expect(reducer(initialState, user.verifyUserSessionError())).to.eql(
      initialState.merge(Map({
        verifyingSession: false,
        requireLogin: true,
      }))
    )
  })

  it(`should handle ${ user.LOGIN_USER }`, () => {
    expect(reducer(initialState, user.loginUser())).to.eql(
      initialState.merge(Map({
        loggingIn: true,
        formMessage: 'logging you in...',
      }))
    )
  })

  it(`should handle ${ user.LOGIN_USER_SUCCESS }`, () => {
    const userInfo = { token: 'some-token' }
    expect(reducer(initialState, user.onUserLoginSuccess(userInfo))).to.eql(
      initialState.merge(Map({
        loggingIn: false,
        requireLogin: false,
        userInfo,
        userFormInfo: {},
      }))
    )
  })

  it(`should handle ${ user.LOGIN_USER_ERROR }`, () => {
    const message = 'some-message'
    expect(reducer(initialState, user.onUserLoginError(message))).to.eql(
      initialState.merge(Map({
        loggingIn: false,
        formMessage: message,
        loginFailed: true,
      }))
    )
  })

  it(`should handle ${ user.CAPTURE_USER_FORM_INFO }`, () => {
    const info = { name: 'email', value: 'john@example.com' }
    expect(reducer(initialState, user.captureUserFormInfo(info))).to.eql(
      initialState.merge(Map({
        userFormInfo: {
          [info.name]: info.value,
        },
      }))
    )
  })

  it(`should not over-write old values for ${ user.CAPTURE_USER_FORM_INFO }`, () => {
    const info = { name: 'email', value: 'john@example.com' }
    const intermediateState = reducer(initialState, user.captureUserFormInfo(info))

    const newInfo = { name: 'password', value: 'john' }
    const finalState = reducer(intermediateState, user.captureUserFormInfo(newInfo))

    expect(finalState).to.eql(
      finalState.merge(Map({
        userFormInfo: {
          [info.name]: info.value,
          [newInfo.name]: newInfo.value,
        },
      }))
    )
  })

  it(`should handle ${ user.LOGOUT_USER }`, () => {
    expect(reducer(initialState, user.logoutUser())).to.eql(
      initialState.merge(Map({
        userInfo: void(0),
        requireLogin: true,
      }))
    )
  })

  it(`should handle ${ user.REGISTER_USER }`, () => {
    expect(reducer(initialState, user.registerUser())).to.eql(
      initialState.merge(Map({
        registeringAccount: true,
        formMessage: messages.REGISTERING_USER_FORM_MESSAGE,
        formErrors: {},
      }))
    )
  })

  it(`should handle ${ user.REGISTER_USER_SUCCESS }`, () => {
    expect(reducer(initialState, user.onUserRegisterSuccess())).to.eql(
      initialState.merge(Map({
        registeringAccount: false,
        formMessage: messages.USER_REGISTER_SUCCESS_MESSAGE,
      }))
    )
  })

  it(`should handle ${ user.REGISTER_USER_ERROR }`, () => {
    const message = 'some-message'
    const errors = { email: 'email is required' }
    expect(reducer(initialState, user.onUserRegisterError({ message, errors }))).to.eql(
      initialState.merge(Map({
        registeringAccount: false,
        formMessage: message,
        formErrors: errors,
      }))
    )
  })
})
