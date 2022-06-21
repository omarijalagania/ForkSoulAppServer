import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './config'

const app = express()

connectDB(false)

app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on: ${process.env.BASE_URL}:${process.env.PORT}`
  )
})
