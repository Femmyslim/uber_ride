'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehicle.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      uniqueKey: true
    },
    customer_id: {
      type: DataTypes.STRING,
      references: {
        model: 'driver',
        key: 'driver_id'
      }
    },
    plait_number: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqueKey: true
    },
    car_model:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_picture: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    car_charsis_no: {
      type: DataTypes.STRING,
      uniqueKey: true,
      allowNull: false,
    },
    insurance_no:{
      type: DataTypes.STRING,
      allowNull: false
    },
    inspection_appointment: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};