'use strict';
const {
  Model
} = require('sequelize');
const empresa = require('../controllers/empresa');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Empresa.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};