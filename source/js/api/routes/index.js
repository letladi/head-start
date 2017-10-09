import { Router } from 'express'

const router = new Router()

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see the secret message.",
  })
})


export default router
