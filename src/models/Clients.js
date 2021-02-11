const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(200),
            password_hash: DataTypes.STRING(20)
        }, {
            sequelize,
            modelName: 'client'
        });
    };
};

module.exports = Client;