import { validate, Joi } from "express-validation";

const validation = {
    body: Joi.object({
        produtos: Joi.array().required(),
    })
};

export default validate(validation);