import express from 'express'
import {
  addBandMember,
  getBandMembers,
  getOneBandMember,
  editBandMember,
  deleteBandMember,
} from '../controllers'

const router = express.Router()

router.post('/add', addBandMember)

router.get('/get', getBandMembers)
router.get('/get-one/:memberId', getOneBandMember)
router.put('/edit/:memberId', editBandMember)
router.delete('/delete/:memberId', deleteBandMember)
export default router
