export const APPLICATION_NAME = 'head-start'
export const LOCAL_USER_STATE = 'LOCAL_USER_STATE'

export const ACCOUNT = {
  REGISTER: {
    name: 'REGISTER',
    title: 'Register a new account',
    alternateText: 'Already have an account?',
    alternateCommand: 'Login Instead',
    alternateAction: 'LOGIN',
  },
  LOGIN: {
    name: 'LOGIN',
    title: 'Login to your account',
    alternateText: 'New to our site?',
    alternateCommand: 'Register Instead',
    alternateAction: 'REGISTER',
  },
}

export const MONGO_EMAIL_DUPLICATION_ERROR = 11000
export const MONGO_ERROR = 'MongoError'
export const HTTP_CONFLICT_ERROR = 409
export const INCORRECT_CREDENTIALS_ERROR = 'INCORRECT_CREDENTIALS_ERROR'
