'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Professor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    instituicaoEnsino: DataTypes.STRING,
    departamento: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    carteiraId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};