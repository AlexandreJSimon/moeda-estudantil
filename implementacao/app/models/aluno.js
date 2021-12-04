'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aluno.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    instituicaoEnsino: DataTypes.STRING,
    curso: DataTypes.STRING,
    endereco: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};