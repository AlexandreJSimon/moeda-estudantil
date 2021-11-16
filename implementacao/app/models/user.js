'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf_cnpj: DataTypes.STRING,
    rg: DataTypes.STRING,
    endereco: DataTypes.STRING,
    instituicao_ensino: DataTypes.STRING,
    curso: DataTypes.STRING,
    departamento: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user, options) => {
    try{
      const hash = await bcrypt.hash(user.senha, 10);
      user.senha = hash;
    }catch(err){
      console.log(err);
    }
  });
  
  return User;
};