import Joi from 'joi'
import { BandMemberProps } from 'types'

const validateBandMember = (data: BandMemberProps) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .pattern(new RegExp('[Ⴀ-\u10fe]$'), 'Georgian only')

      .required(),
    instrument: Joi.string()
      .min(2)
      .pattern(new RegExp('[Ⴀ-\u10fe]$'), 'Georgian only')

      .required(),
    orbitLength: Joi.number().min(100).max(600).required(),
    color: Joi.string()
      .length(7)
      .pattern(
        new RegExp(
          /(?:#|0x)(?:[aA-fF0-9]{3}|[aA-fF0-9]{6})\b|(?:rgb|hsl)a?([^)]*)/
        ),
        'Enter valid color'
      )
      .required(),
    biography: Joi.string()
      .pattern(new RegExp('[Ⴀ-\u10fe]$'), 'Georgian only')
      .required(),
  })

  return schema.validate(data)
}

export default validateBandMember
