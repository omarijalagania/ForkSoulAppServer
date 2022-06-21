import Joi from 'joi'

const validateBandMember = (data: any) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .pattern(new RegExp('^[ა-ჰ0-9]{3,30}$'), 'Georgian only')
      .required(),
    instrument: Joi.string()
      .min(2)
      .pattern(new RegExp('^[ა-ჰ0-9]{3,30}$'), 'Georgian only')
      .required(),
    orbitLength: Joi.number().min(60).max(300).required(),
    color: Joi.string()
      .min(7)
      .max(7)
      .pattern(new RegExp('/#([a-f0-9]{3}){1,2}\b/i'), 'Enter valid color')
      .required(),
    biography: Joi.string()
      .pattern(new RegExp('^[ა-ჰ0-9]{3,30}$'), 'Georgian only')
      .required(),
  })

  return schema.validate(data)
}

export default validateBandMember
