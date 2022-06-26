import { avatarUpload, getAvatars } from '../controllers'
import express from 'express'

const router = express.Router()

router.post('/avatar/upload/:memberId', avatarUpload)
router.get('/avatar/get/:memberId', getAvatars)

export default router
