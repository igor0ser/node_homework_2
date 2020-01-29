"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
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
});
exports.validate = (user) => schema.validate(user);
//# sourceMappingURL=validate.js.map