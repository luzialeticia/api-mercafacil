const Client = require('../models/Clients');
const hash = require('bcrypt');

module.exports = {
    async store(req, res) {
        const { password } = req.body;

        const passwordHash = await hash(password, 8);

        req.body.password_hash = passwordHash;

        const { name } = req.body;

        const contact = await Client.create({ name });

        return res.status(201).json({
            message: "Cliente cadastrado com sucesso!",
            contact
        });
    }
};