import {
  avatarUpload,
  getAvatars,
  socialAvatarUpload,
  getSocialAvatars,
  bandAvatarUpload,
  getBandAvatar,
} from '../controllers'
import express from 'express'
import { authMiddleware } from '../middlewares'
const router = express.Router()

router.post('/avatar/upload/:memberId', authMiddleware, avatarUpload)
router.post(
  '/social-avatar/upload/:memberId',
  authMiddleware,
  socialAvatarUpload
)
router.post('/band-avatar/upload/:bandId', authMiddleware, bandAvatarUpload)

router.get('/social-avatar/get/:memberId', authMiddleware, getSocialAvatars)
router.get('/avatar/get/:memberId', authMiddleware, getAvatars)
router.get('/band-avatar/get/:bandId', authMiddleware, getBandAvatar)

export default router
