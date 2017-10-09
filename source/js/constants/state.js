export const isDevelopment = (process.env.NODE_ENV == 'development')
export const isProduction = (isDevelopment == false)
export const JWT_SECRET = 'A SECRET'
