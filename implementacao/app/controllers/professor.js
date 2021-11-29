const passport = require("passport");

module.exports = (app) => {
  
    const professor = {};
    const Professor = app.models.index.Professor
    const User = app.models.index.User

    professor.index = async (req,res) => {

      professores = await Professor.findAll({ raw: true });

      try{
        return res.format({
          html : () => {
              res.render('professor/index', { professores: professores});
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    professor.new = async (req,res) => {
      try{
        return res.format({
          html : () => {
              res.render('professor/new');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }
    
    professor.register = async (req,res) => {
      const { email, senha, nome, cpf, instituicaoEnsino, departamento, carteira } = req.body;
      //TODO Alterar posterios para uma lista de roles, sendo transacao, recebedor, emissor que define as permicoes
      const role = "op_transacao";
      try{
        const userCreated = await User.create({ 
          email,
          senha,
          role
        });

        const userId = userCreated.id;
        const professorCreated = await Professor.create({ 
          nome,
          cpf, 
          instituicaoEnsino,
          departamento,
          carteira,
          userId
        });

        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    professor.getById = async (req,res) => {

      try{
        const professor = await Professor.findOne({ raw: true, where: { id: req.params.id } });
        return res.render('professor/new', { professor: professor })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    professor.update = async (req,res) => {
      const { email, senha, nome, cpf, instituicaoEnsino, departamento, carteira } = req.body;

      try{
        await Professor.update({
          email: email, 
          senha: senha, 
          //role: role,
          nome: nome,
          cpf: cpf,
          instituicaoEnsino: instituicaoEnsino,
          departamento: departamento,
          carteira: carteira
        }, { where: { id: req.params.id }})

        return res.redirect('/')
      }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    professor.delete = async (req,res) => {
      try{
        Professor.destroy({
          where: {
              id: req.params.id
          }
        })
        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return professor;
  }