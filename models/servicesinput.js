'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicesInput extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServicesInput.init({
    phoneNumber: DataTypes.STRING,
    tribunalName: DataTypes.STRING,
    tribunalService: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServicesInput',
  });
  return ServicesInput;
};