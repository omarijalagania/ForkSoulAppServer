import express from 'express'
import { userAuth } from '../controllers'

const router = express.Router()

router.post('/login', userAuth)

export default router
