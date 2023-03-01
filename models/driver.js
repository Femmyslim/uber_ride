'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  driver.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      uniqueKey: true
    },
    driver_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqueKey:true     
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqueKey:true  
    },
    is_phone_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house_no: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    street_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    nin_no: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqueKey: true
    },
    is_nin_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    },
    driver_license_no: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqueKey: true
    },
    is_driver_license_no_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    },
    driver_license_expiry_date: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqueKey: true
    },
    driver_photo: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    is_disable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  },
  is_disable_reason: {
      type: DataTypes.TEXT,
      defaultValue: null
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
    modelName: 'driver',
  });
  return driver;
};