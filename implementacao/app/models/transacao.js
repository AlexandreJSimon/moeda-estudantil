'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transacao.init({
    idUsuario: DataTypes.INTEGER,
    idVantagem: DataTypes.INTEGER,
    valor: DataTypes.INTEGER,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transacao',
  });
  return Transacao;
};