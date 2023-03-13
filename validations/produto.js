import { validate, Joi } from "express-validation";


const validation = {
    body: Joi.object({
        nome: Joi.string().required(),
        photo: Joi.any(),
        preco: Joi.number().required(),
        descricao: Joi.string().required(),
        categoria: Joi.required(),
    })
};

export default validate(validation);