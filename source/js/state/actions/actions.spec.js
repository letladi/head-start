import { expect } from 'chai'
import { verifyUserSession, loginUser, VERIFY_USER_SESSION, LOGIN_USER } from 'state/actions/user'

describe('actions for current user', () => {
  it('should create an action to verify the current user session', () => {
    const expectedAction = {
      type: VERIFY_USER_SESSION,
    }
    expect(verifyUserSession()).to.eql(expectedAction)
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
