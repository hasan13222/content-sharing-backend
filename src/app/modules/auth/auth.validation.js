import joi from 'joi'

const registerUserValidationSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  fullname: joi.string().required(),
});

const loginValidationSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const authValidations = {
  registerUserValidationSchema,
  loginValidationSchema,
};
