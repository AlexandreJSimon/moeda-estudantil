const passport = require("passport");

module.exports = (app) => {
  
    const aluno = {};
    const Aluno = app.models.index.Aluno
    const User = app.models.index.User

    aluno.index = async (req,res) => {

      alunos = await Aluno.findAll({ raw: true });

      try{
        return res.format({
          html : () => {
              res.render('aluno/index', { alunos: alunos});
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.new = async (req,res) => {
      try{
        return res.format({
          html : () => {
              res.render('aluno/new');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }
    
    aluno.register = async (req,res) => {
      const { email, senha, nome, cpf, rg, instituicaoEnsino, curso, endereco } = req.body;
      const role = "aluno";
      try{
        const userCreated = await User.create({ 
          email,
          senha,
          role
        });

        const userId = userCreated.id;
        const alunoCreated = await Aluno.create({ 
          nome,
          cpf, 
          rg,
          instituicaoEnsino,
          curso,
          endereco,
          userId
        });

        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.getById = async (req,res) => {

      try{
        const aluno = await Aluno.findOne({ raw: true, where: { id: req.params.id } });
        return res.render('aluno/new', { aluno: aluno })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.update = async (req,res) => {
      const { email, senha, nome, cpf, rg, instituicaoEnsino, curso, endereco } = req.body;

      try{
        const userUpdated = await User.update({ 
          email,
          senha
        });

        const userId = userUpdated.id;
        await Aluno.update({ 
          nome,
          cpf, 
          rg,
          instituicaoEnsino,
          curso,
          endereco,
          userId
        });

        return res.redirect('/')
      }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.delete = async (req,res) => {
      try{
        const alunodeleted = Aluno.destroy({
          where: {
              id: req.params.id
          }
        })
        
        User.destroy({
          where: {
              id: alunodeleted.userId
          }
        })
        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return aluno;
  }