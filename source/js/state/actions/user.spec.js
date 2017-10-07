import { expect } from 'chai'
import * as user from 'state/actions/user'

describe('actions for current user', () => {
  it('should create an action to verify the current user session', () => {
    const expectedAction = {
      type: user.VERIFY_USER_SESSION,
    }
    expect(user.verifyUserSession()).to.eql(expectedAction)
  })

  it('should create action after user session was successfully verified', () => {
    const userInfo = { token: 'some token' }
    const expectedAction = {
      type: user.VERIFY_USER_SESSION_SUCCESS,
      userInfo,
    }
    expect(user.verifyUserSessionSuccess(userInfo)).to.eql(expectedAction)
  })

  it('should create action after user session was not verified', () => {
    const expectedAction = {
      type: user.VERIFY_USER_SESSION_ERROR,
    }
    expect(user.verifyUserSessionError()).to.eql(expectedAction)
  })

  it('should create an action to login a user', () => {
    const data = { email: 'user@example.com', password: 'password' }
    const expectedAction = {
      type: user.LOGIN_USER,
      data,
    }
    expect(user.loginUser(data)).to.eql(expectedAction)
  })

  it('should create an action to capture user login success', () => {
    const userInfo = { token: 'some-token' }
    const expectedAction = {
      type: user.LOGIN_USER_SUCCESS,
      userInfo,
    }
    expect(user.onUserLoginSuccess(userInfo)).to.eql(expectedAction)
  })

  it('should create an action to capture user login error', () => {
    const expectedAction = {
      type: user.LOGIN_USER_ERROR,
    }
    expect(user.onUserLoginError()).to.eql(expectedAction)
  })

  it('should create action to show account modal', () => {
    const modalInfo = {}
    const expectedAction = {
      type: user.SHOW_ACCOUNT_MODAL,
      modalInfo,
    }
    expect(user.showAccountModal(modalInfo)).to.eql(expectedAction)
  })

  it('should create action to hide account modal', () => {
    const expectedAction = {
      type: user.HIDE_ACCOUNT_MODAL,
    }
    expect(user.hideAccountModal()).to.eql(expectedAction)
  })

  it('should create action to capture user form info', () => {
    const info = { email: 'john@example.com', password: 'john' }
    const expectedAction = {
      type: user.CAPTURE_USER_FORM_INFO,
      info,
    }
    expect(user.captureUserFormInfo(info)).to.eql(expectedAction)
  })
})
