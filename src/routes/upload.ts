import {
  avatarUpload,
  getAvatars,
  socialAvatarUpload,
  getSocialAvatars,
} from '../controllers'
import express from 'express'

const router = express.Router()

router.post('/avatar/upload/:memberId', avatarUpload)
router.post('/social-avatar/upload/:memberId', socialAvatarUpload)
router.get('/social-avatar/get/:memberId', getSocialAvatars)
router.get('/avatar/get/:memberId', getAvatars)

export default router
