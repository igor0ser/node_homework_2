import * as Joi from '@hapi/joi'

export interface User {
  id: string
  login: string
  password: string
  age: number
  isDeleted: boolean
}

const schema = Joi.object({
  login: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),

  password: Joi.string()
    .alphanum()
    .min(8)
    .max(20)
    .required(),

  age: Joi.number()
    .min(4)
    .max(130)
    .required(),
})

export const validate = (user) => schema.validate(user)