import express from 'express'
import {
  addSocialNetwork,
  getSocialNetworks,
  getOneSocialNetwork,
  editSocialNetwork,
  deleteSocialNetwork,
} from '../controllers'

const router = express.Router()

router.post('/add', addSocialNetwork)
router.get('/get', getSocialNetworks)
router.get('/get-one/:socialId', getOneSocialNetwork)
router.put('/edit/:socialId', editSocialNetwork)
router.delete('/delete/:socialId', deleteSocialNetwork)
export default router
