import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import { connectDB } from './config'
import { AuthRouter, BandRouter, SocialNetworkRouter } from './routes'

const app = express()
app.use(express.json())
connectDB(false)

app.use(cors())
app.use(bodyParser.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/', AuthRouter)
app.use('/band', BandRouter)
app.use('/social-network', SocialNetworkRouter)

app.listen(process.env.PORT || '4400', () => {
  console.log(
    `Server is running on: ${process.env.BASE_URL}:${process.env.PORT}`
  )
})
