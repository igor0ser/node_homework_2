import * as Joi from '@hapi/joi';

const login = Joi.string()
    .alphanum()
    .min(3)
    .max(20);

const password = Joi.string()
    .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])/,
        'at least one letter and one number'
    )
    .min(8)
    .max(20);

const age = Joi.number()
    .min(4)
    .max(130);

const schemaOnCreate = Joi.object({
    login: login.required(),
    password: password.required(),
    age: age.required()
});

const schemaOnUpdate = Joi.object({
    login,
    password,
    age
});

export const validateOnUpdate = (user) => schemaOnUpdate.validate(user);
export const validateOnCreate = (user) => schemaOnCreate.validate(user);
