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
      const role = "op_recebedor";
      try{
        const userCreated = await User.create({ 
          email,
          senha,
          role
        });

        const userId = userCreated.id;
        await Empresa.create({ 
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
        return res.render('empresa/edit', { empresa: empresa })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    empresa.update = async (req,res) => {

      try{
      
        let empresa = await Empresa.findByPk(req.params.id)
        empresa = await empresa.update(req.body)

        return res.redirect('/')
      }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    empresa.delete = async (req,res) => {
      try{
        const empresaDeleted = Empresa.destroy({
          where: {
              id: req.params.id
          }
        })
        
        User.destroy({
          where: {
              id: empresaDeleted.userId
          }
        })
        return res.redirect('/empresas')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return empresa;
  }