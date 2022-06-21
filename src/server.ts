import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './config'
import { AuthRouter } from './routes'

const app = express()

connectDB(false)

app.use(cors())
app.use(bodyParser.json())

app.use('/', AuthRouter)

app.listen(process.env.PORT || '4400', () => {
  console.log(
    `Server is running on: ${process.env.BASE_URL}:${process.env.PORT}`
  )
})
