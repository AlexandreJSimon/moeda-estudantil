const passport = require("passport");

module.exports = (app) => {
  
    const empresa = {};
    const Empresa = app.models.index.Empresa
    const User = app.models.index.User

    empresa.index = async (req,res) => {

      empresas = await Empresa.findAll({ raw: true });

      try{
        return res.format({
          html : () => {
              res.render('empresa/index', { empresas: empresas});
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    empresa.new = async (req,res) => {
      try{
        return res.format({
          html : () => {
              res.render('empresa/new');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }
    
    empresa.register = async (req,res) => {
      const { email, senha, nome, descricao, valor } = req.body;
      //TODO Alterar posterios para uma lista de roles, sendo transacao, recebedor, emissor que define as permicoes
      const role = "op_transacao";
      try{
        const userCreated = await User.create({ 
          email,
          senha,
          role
        });

        const userId = userCreated.id;
        const empresaCreated = await Empresa.create({ 
          nome,
          descricao,
          valor,
          userId
        });

        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    empresa.getById = async (req,res) => {

      try{
        const empresa = await Empresa.findOne({ raw: true, where: { id: req.params.id } });
        return res.render('empresa/new', { empresa: empresa })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    empresa.update = async (req,res) => {
      const { email, senha, nome, descricao, valor } = req.body;

      try{
        await Empresa.update({
          email: email, 
          senha: senha, 
          //role: role,
          nome: nome,
          descricao: descricao,
          rg: rg,
          valor: valor,
        }, { where: { id: req.params.id }})

        return res.redirect('/')
      }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    empresa.delete = async (req,res) => {
      try{
        Empresa.destroy({
          where: {
              id: req.params.id
          }
        })
        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return empresa;
  }