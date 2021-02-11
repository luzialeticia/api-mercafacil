const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cellphone: DataTypes.STRING(20)
        }, {
            sequelize,
            modelName: 'contact'
        });
    };
};

module.exports = Contact;