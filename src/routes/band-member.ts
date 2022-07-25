import express from 'express'
import { authMiddleware } from 'middlewares'
import {
  addBandMember,
  getBandMembers,
  getOneBandMember,
  editBandMember,
  deleteBandMember,
} from 'controllers'

const router = express.Router()

router.post('/add', authMiddleware, addBandMember)

router.get('/get', getBandMembers)
router.get('/get/:memberId', authMiddleware, getOneBandMember)
router.put('/edit/:memberId', authMiddleware, editBandMember)
router.delete('/delete/:memberId', authMiddleware, deleteBandMember)
export default router
