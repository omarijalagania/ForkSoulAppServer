import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { User } from 'models'
import { validateRegister } from 'schema'
import { connectDB } from 'config'
import { UserSchemaProps } from 'types'
import prompt from 'prompt'

prompt.start()

prompt.get(
  [
    { name: 'user_name' },
    //@ts-ignore
    { name: 'password', hidden: true, replace: '*' },
    //@ts-ignore
    { name: 'confirmPassword', hidden: true, replace: '*' },
  ],
  async function (_, result: UserSchemaProps) {
    const results = {
      user_name: result.user_name,
      password: result.password,
      confirmPassword: result.confirmPassword,
    }

    const { error } = validateRegister(results)

    if (error) {
      return console.log(error.details[0].message)
    }

    connectDB(false)

    try {
      const user = await User.findOne({ user_name: result.user_name })

      if (user) {
        console.log('User already exists')
        return connectDB(true)
      }
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(result.password, salt)

      const newUser = await User.create({
        user_name: result.user_name,
        password: hashedPassword,
      })

      if (newUser) {
        console.log('User created')
        connectDB(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
)
