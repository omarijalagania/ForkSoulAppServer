import express from 'express'
import { updateBandInfo, getBandIfo } from 'controllers'
import { authMiddleware } from 'middlewares'
const router = express.Router()

router.put('/update', authMiddleware, updateBandInfo)
router.get('/get', getBandIfo)

export default router
