export const FILE_UPLOAD_URL = '/upload'
export const HOST_NAME = process.env.HOST_NAME || 'localhost'
export const HOST = process.env.HOST || `http://${ HOST_NAME }`
export const PORT = process.env.PORT || '8080'
export const API_BASE_URL = `${ HOST }:${ PORT }`

export const DB_URI = 'mongodb://localhost/head-start'

export const AUTH_URL = '/auth'
export const USER_LOGIN_URL = `${ AUTH_URL }/login`
export const USER_SIGNUP_URL = `${ AUTH_URL }/register`
