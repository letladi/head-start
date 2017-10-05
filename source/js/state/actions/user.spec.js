import { expect } from 'chai'
import { 
  verifyUserSession, verifyUserSessionSuccess, verifyUserSessionError, loginUser, 
  VERIFY_USER_SESSION, VERIFY_USER_SESSION_SUCCESS, VERIFY_USER_SESSION_ERROR, LOGIN_USER, 
} from 'state/actions/user'

describe('actions for current user', () => {
  it('should create an action to verify the current user session', () => {
    const expectedAction = {
      type: VERIFY_USER_SESSION,
    }
    expect(verifyUserSession()).to.eql(expectedAction)
  })

  it('should create action after user session was successfully verified', () => {
    const userInfo = { token: 'some token' }
    const expectedAction = {
      type: VERIFY_USER_SESSION_SUCCESS,
      userInfo,
    }
    expect(verifyUserSessionSuccess(userInfo)).to.eql(expectedAction)
  })

  it('should create action after user session was not verified', () => {
    const expectedAction = {
      type: VERIFY_USER_SESSION_ERROR,
    }
    expect(verifyUserSessionError()).to.eql(expectedAction)
  })

  it('should create an action to login a user', () => {
    const data = { email: 'user@example.com', password: 'password' }
    const expectedAction = {
      type: LOGIN_USER,
      data,
    }
    expect(loginUser(data)).to.eql(expectedAction)
  })
})
