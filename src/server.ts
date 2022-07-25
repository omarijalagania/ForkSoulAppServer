import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import { connectDB } from 'config'
import { upload } from 'utils'
import {
  AuthRouter,
  BandRouter,
  SocialNetworkRouter,
  UploadRouter,
  BandInfoRouter,
} from './routes'
import { swaggerMiddleware } from 'middlewares'
dotenv.config({ path: path.resolve(__dirname, '../.env') })
const app = express()
app.use(express.json())
connectDB(false)

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/', AuthRouter)
app.use('/band', BandRouter)
app.use('/band-info', BandInfoRouter)
app.use('/social-network', SocialNetworkRouter)
app.use('/', upload.single('avatar'), UploadRouter)
//@ts-ignore
app.use('/api-docs', swaggerMiddleware())

app.listen(process.env.PORT || '4400', () => {
  console.log(
    `Server is running on: ${process.env.BASE_URL}:${process.env.PORT}`
  )
})
