const Contact = require('../models/Macapa');

module.exports = {
    async store(req, res) {
        const { nome, celular } = req.body;

        const contact = await Contact.create({ nome, celular });

        return res.status(201).json({
            message: "Contato cadastrado com sucesso!",
            contact
        });
    }
};