import { Request, Response } from 'express'
import { validateLogin } from '../schema'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models'

export const userAuth = async (req: Request, res: Response) => {
  const { error } = validateLogin(req.body)

  if (error) {
    return res.status(422).send(error.details[0].message)
  }

  const user = await User.findOne({ user_name: req.body.user_name })

  if (!user) {
    return res.status(422).send('Please provide valid credentials')
  }

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) {
    return res.status(422).send('Please provide valid credentials')
  }

  const token = jwt.sign(
    { _id: user._id, name: user.user_name },
    process.env.TOKEN_SECRET
  )
  res.header('auth-token', token).send({ token: token })
}
