import jwt from 'jsonwebtoken'
import User from 'api/models/User'
import { JWT_SECRET } from 'constants/state'

export default (req, res, next) => {
  console.log('WE ARE CHECKING AUTHORIZATION')
  if (req.headers.authorization == void(0)) {
    console.log('AUTHORIZATION FAILED')
    return res.status(401).end()
  }

  const token = req.headers.authorization.split(' ')[1]

  return jwt.verify(token, JWT_SECRET, (err, decoded) => {
    console.log('WE ARE CHECKING AUTHORIZATION', err, decoded)
    if (err) {
      return res.status(401).end()
    }

    const userId = decoded.sub

    return User.findById(userId, (userErr, user) => {
      if (userErr || user == void(0)) {
        return res.status(401).end()
      }

      return next()
    })
  })
}
