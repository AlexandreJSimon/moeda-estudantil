module.exports = (app) => {
  
    const professor = {};
    const Professor = app.models.index.Professor
    const User = app.models.index.User
    const Carteira = app.models.index.Carteira

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
      const role = "op_transacao";
      try{

        const userEntity = await User.create({ 
          email,
          senha,
          role
        });

        const userId = userEntity.id;
        const saldo = 500;

        const carteiraEntity = await Carteira.create({ 
          saldo,
          userId
        });

        const carteiraId = carteiraEntity.id;
        const professorEntity = await Professor.create({ 
          nome,
          cpf, 
          instituicaoEnsino,
          departamento,
          carteiraId,
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
        return res.render('professor/edit', { professor: professor })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    professor.update = async (req,res) => {
      try{

        let professor = await Professor.findByPk(req.params.id)
        professor = await professor.update(req.body)

        return res.redirect('/')
      }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    professor.delete = async (req,res) => {
      try{
        const professorDelted = Professor.destroy({
          where: {
              id: req.params.id
          }
        })

        User.destroy({
          where: {
              id: professorDelted.userId
          }
        })
        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return professor;
  }