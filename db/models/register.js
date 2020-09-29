'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  register.init({
    name: DataTypes.STRING,
    whatsapp: DataTypes.INTEGER,
    email: DataTypes.STRING,
    community: DataTypes.STRING,
    job: DataTypes.STRING,
    event_source: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'register',
  });
  return register;
};