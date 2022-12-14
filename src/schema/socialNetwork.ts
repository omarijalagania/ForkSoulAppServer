import Joi from 'joi'
import { SocialNetworkProps } from 'types'

const validateSocialNetwork = (data: SocialNetworkProps) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    socialUrl: Joi.string()
      .pattern(
        new RegExp(
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        )
      )
      .required(),
  })

  return schema.validate(data)
}

export default validateSocialNetwork
