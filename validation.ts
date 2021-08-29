const Joi = require("@hapi/joi");

const registerValidation = (data : any) => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    passowrd: Joi.string().min(6).required()
  }

  return Joi.validate(data, schema);
}

const loginValidation = (data : any) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    passowrd: Joi.string().min(6).required()
  }

  return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;