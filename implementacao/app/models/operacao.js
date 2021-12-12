'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Operacao.init({
    valor: DataTypes.INTEGER,
    mensagem: DataTypes.STRING,
    userIdRemetente: DataTypes.INTEGER,
    userIdDestinatario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operacao',
  });
  return Operacao;
};