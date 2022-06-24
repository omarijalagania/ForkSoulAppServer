import { avatarUpload } from '../controllers'
import express from 'express'

const router = express.Router()

router.post('/avatar/upload/:memberId', avatarUpload)

export default router
