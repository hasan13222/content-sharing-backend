import joi from 'joi'

const updateProfileValidationSchema = joi.object({
    userId: joi.string().required(),
    address: joi.string(),
    phone: joi.string(),
    occupation: joi.string()
});

export const profileValidations = {
    updateProfileValidationSchema,
};
