const Joi = require('joi')




// validation one for Admin
const validation = (data) => {
    const Schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(4)
            .max(30)
            .required(),
        email: Joi.string()
            .email()
            .required(),
        phone: Joi.string()
            .min(11)
            .required(),

    }).options({ allowUnknown: true })

    return Schema.validate(data)
}



module.exports = validation 