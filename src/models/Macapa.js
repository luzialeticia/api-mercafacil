const { Model, DataTypes } = require('sequelize');

class Contact extends Models {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            celular: DataTypes.STRING(20)
        }, {
            sequelize
        });
    };
};