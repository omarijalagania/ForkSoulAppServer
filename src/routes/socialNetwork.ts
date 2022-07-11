import express from 'express'
import { authMiddleware } from '../middlewares'
import {
  addSocialNetwork,
  getSocialNetworks,
  getOneSocialNetwork,
  editSocialNetwork,
  deleteSocialNetwork,
} from '../controllers'

const router = express.Router()

router.post('/add', authMiddleware, addSocialNetwork)
router.get('/get', getSocialNetworks)
router.get('/get-one/:socialId', authMiddleware, getOneSocialNetwork)
router.put('/edit/:socialId', authMiddleware, editSocialNetwork)
router.delete('/delete/:socialId', authMiddleware, deleteSocialNetwork)
export default router
