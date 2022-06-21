import Joi from 'joi'
import { UserSchemaProps } from 'types'

const validateRegister = (data: UserSchemaProps) => {
  const schema = Joi.object({
    user_name: Joi.string().lowercase().min(3).required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .messages({ 'any.only': 'passwords does not match' }),
  })

  return schema.validate(data)
}

export default validateRegister
