import Joi from 'joi'
import { UserSchemaProps } from 'types'

const validateLogin = (data: UserSchemaProps) => {
  const schema = Joi.object({
    user_name: Joi.string().lowercase().min(3).required(),
    password: Joi.string().min(3).required(),
  })

  return schema.validate(data)
}

export default validateLogin
