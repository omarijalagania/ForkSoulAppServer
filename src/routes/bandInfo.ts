import express from 'express'
import { updateBandInfo, getBandIfo } from '../controllers'

const router = express.Router()

router.put('/update', updateBandInfo)
router.get('/get', getBandIfo)

export default router
