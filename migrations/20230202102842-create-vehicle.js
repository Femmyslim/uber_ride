'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        uniqueKey: true
      },
      customer_id: {
        type: Sequelize.STRING,
        references: {
          model: 'driver',
          key: 'driver_id'
        }
      },
      plait_number: {
        type: Sequelize.STRING,
        allowNull: false,
        uniqueKey: true
      },
      car_model:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_picture: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      car_charsis_no: {
        type: Sequelize.STRING,
        uniqueKey: true,
        allowNull: false,
      },
      insurance_no:{
        type: Sequelize.STRING,
        allowNull: false
      },
      inspection_appointment: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle');
  }
};