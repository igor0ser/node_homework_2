import * as Joi from '@hapi/joi';

const UserId = Joi.number().required();
const GroupId = Joi.number().required();

const schemaOnCreate = Joi.object({ UserId, GroupId });

export const validateOnCreate = (user) => schemaOnCreate.validate(user);
