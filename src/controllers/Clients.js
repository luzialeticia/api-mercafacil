const Client = require('../models/Clients');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const contact = await Client.create({ name });

        return res.status(201).json({
            message: "Cliente cadastrado com sucesso!",
            contact
        });
    }
};