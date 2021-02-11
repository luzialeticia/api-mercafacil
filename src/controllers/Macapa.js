const Contact = require('../models/Macapa');

module.exports = {
    async store(req, res) {
        const { name, cellphone } = req.body;

        const contact = await Contact.create({ name, cellphone });

        return res.status(201).json({
            message: "Contato cadastrado com sucesso!",
            contact
        });
    }
};