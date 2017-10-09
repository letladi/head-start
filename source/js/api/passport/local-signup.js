import User from 'api/models/User'
import { Strategy } from 'passport-local'

export default new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    username: req.body.username.trim(),
  }

  const newUser = new User(userData)
  newUser.save((err) => {
    if (err) return done(err)

    return done(err)
  })
})
