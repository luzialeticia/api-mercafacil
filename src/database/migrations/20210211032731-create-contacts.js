'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('contacts',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING(20),
        allowNull: false
      }
    });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('contacts');
  }
};
