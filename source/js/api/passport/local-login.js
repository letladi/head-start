import jwt from 'jsonwebtoken'
import User from 'api/models/User'
import { Strategy } from 'passport-local'
import { JWT_SECRET } from 'constants/state'

export default new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
  }

  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) return done(err)

    if (user == void(0)) {
      const error = new Error('Incorrect email or password')
      error.name = 'INCORRECT_CREDENTIALS_ERROR'

      return done(error)
    }

    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) return done(err)

      if (isMatch == false) {
        const error = new Error('Incorrect email or password')
        error.name = 'INCORRECT_CREDENTIALS_ERROR'

        return done(error)
      }

      const payload = {
        sub: user._id,
      }

      const token = jwt.sign(payload, JWT_SECRET)
      const data = {
        username: user.username,
      }

      return done(null, token, data)
    })
  })
})
