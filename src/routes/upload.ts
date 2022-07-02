import {
  avatarUpload,
  getAvatars,
  socialAvatarUpload,
  getSocialAvatars,
  bandAvatarUpload,
  getBandAvatar,
} from '../controllers'
import express from 'express'

const router = express.Router()

router.post('/avatar/upload/:memberId', avatarUpload)
router.post('/social-avatar/upload/:memberId', socialAvatarUpload)
router.post('/band-avatar/upload/:bandId', bandAvatarUpload)

router.get('/social-avatar/get/:memberId', getSocialAvatars)
router.get('/avatar/get/:memberId', getAvatars)
router.get('/band-avatar/get/:bandId', getBandAvatar)

export default router
