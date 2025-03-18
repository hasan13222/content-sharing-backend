import joi from 'joi'

const updateContentValidationSchema = joi.object({
    userId: joi.string().required(),
    content: joi.string().required(),
});

export const contentValidations = {
    updateContentValidationSchema,
};
