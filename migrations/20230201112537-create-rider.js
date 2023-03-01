'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rider', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        uniqueKey: true
      },
      rider_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey:true   
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      phone: {
        type: Sequelize.STRING, 
        allowNull: false,
        uniqueKey:true
      },
      is_phone_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_salt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT-TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rider');
  }
};