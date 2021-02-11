const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(200),
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING(20)
        }, {
            sequelize,
            modelName: 'client'
        });
        this.addHook('beforeSave', async client => {
            if(client.password) {
                client.password_hash = await bcrypt.hash(client.password, 8);
            }
        });
        return this;
    };
};

module.exports = Client;