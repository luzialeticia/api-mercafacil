const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            celular: DataTypes.STRING(20)
        }, {
            sequelize
        });
    };
};

module.exports = Contact;