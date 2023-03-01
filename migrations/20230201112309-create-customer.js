'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('driver', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        uniqueKey: true
      },
      driver_id: {
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
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey:true  
      },
      is_phone_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_salt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      house_no: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      street_name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      nin_no: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey: true
      },
      is_nin_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
      },
      driver_license_no: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey: true
      },
      is_driver_license_no_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
      },
      driver_license_expiry_date: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey: true
      },
      driver_photo: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      is_disable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    is_disable_reason: {
        type: Sequelize.TEXT,
        defaultValue: null
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
    await queryInterface.dropTable('driver');
  }
};