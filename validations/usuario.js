import { validate, Joi } from "express-validation";

const validation = {
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
    })
};



export default validate(validation);