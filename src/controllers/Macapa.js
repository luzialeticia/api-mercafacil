const { findAll } = require('../models/Macapa');
const Contact = require('../models/Macapa');

module.exports = {
    async index(req, res) {
        const contacts = await Contact.findAll();

        return res.status(200).json(contacts);
    },

    async store(req, res) {
        const { name, cellphone } = req.body;

        const contact = await Contact.create({ name, cellphone });

        return res.status(201).json({
            message: "Contato cadastrado com sucesso!",
            contact
        });
    }
};