import validator from 'validator'

export const falsy = (v) => (!!v == false)

export const validateSignUp = ({ username = '', email = '', password = '' } = {}) => {
  const errors = {}
  let isValid = true

  if (validator.isEmail(email) == false) {
    isValid = false
    errors.email = 'Please provide a correct email address.'
  }

  if (validator.isLength(username, { min: 1 }) == false) {
    isValid = false
    errors.name = 'Please provide a unique username.'
  }

  if (validator.isLength(password, { min: 4 }) == false) {
    isValid = false
    errors.password = 'Password must have at least 4 characters.'
  }

  return {
    success: isValid,
    errors,
  }
}

export const validateLogin = ({ email = '', password = '' } = {}) => {
  const errors = {}
  let isValid = true

  if (validator.isEmail(email) == false) {
    isValid = false
    errors.email = 'Please provide a correct email address.'
  }

  if (validator.isLength(password, { min: 4 }) == false) {
    isValid = false
    errors.password = 'Password must have at least 4 characters.'
  }

  return {
    success: isValid,
    errors,
  }
}
