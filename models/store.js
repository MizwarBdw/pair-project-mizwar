'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Store.init({
    name: {
      type :DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    type: DataTypes.STRING,
    information: {
      type :DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};