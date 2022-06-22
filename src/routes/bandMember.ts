import express from 'express'
import {
  addBandMember,
  getBandMembers,
  editBandMember,
  deleteBandMember,
} from '../controllers'

const router = express.Router()

router.post('/add', addBandMember)
router.get('/get', getBandMembers)
router.put('/edit/:memberId', editBandMember)
router.delete('/delete/:memberId', deleteBandMember)
export default router
