import * as Joi from '@hapi/joi';
import { PERMISSIONS_VALUES } from './interfaces'

const name = Joi.string()
    .alphanum();

const permissions = Joi.array()
    .items()
    .valid(...PERMISSIONS_VALUES)
    .min(1)


const schemaOnCreate = Joi.object({
    name: name.required(),
    permissions: permissions.required(),
});

const schemaOnUpdate = Joi.object({
    name,
    permissions,
});

export const validateOnUpdate = (group) => schemaOnUpdate.validate(group);
export const validateOnCreate = (group) => schemaOnCreate.validate(group);
