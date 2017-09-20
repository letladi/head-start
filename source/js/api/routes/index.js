import { Router } from 'express'
import passport from 'passport'

const router = new Router()

// login the user
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user)
})


export default router
