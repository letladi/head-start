import { Router } from 'express'
import { validateSignUp, validateLogin } from 'util/index'
import {
  MONGO_ERROR, MONGO_EMAIL_DUPLICATION_ERROR, INCORRECT_CREDENTIALS_ERROR,
} from 'constants/names'
import passport from 'passport'

const router = new Router()

router.post('/register', (req, res, next) => {
  const validationResult = validateSignUp(req.body)

  if (validationResult.success == false) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    })
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name == MONGO_ERROR && err.code == MONGO_EMAIL_DUPLICATION_ERROR) {
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.',
          },
        })
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.',
    })
  })(req, res, next)
})

router.post('/login', (req, res, next) => {
  const validationResult = validateLogin(req.body)
  if (validationResult.success == false) {
    return res.status(400).json({
      success: false,
      mesage: validationResult.message,
      errors: validationResult.errors,
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name == INCORRECT_CREDENTIALS_ERROR) {
        return res.status(400).json({
          success: false,
          message: err.message,
        })
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      })
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData,
    })
  })(req, res, next)
})

router.post('/logout', (req, res) => {
  // TODO - something needs to be done here, like after
  // we've implemented a redis-based solution?
  res.json({ message: 'You are logged out' })
})

export default router
