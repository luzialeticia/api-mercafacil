const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(200),
            cellphone: DataTypes.STRING(20)
        }, {
            sequelize,
            modelName: 'contact'
        });
    };
};

module.exports = Contact;