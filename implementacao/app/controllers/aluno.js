
module.exports = (app) => {
  
    const aluno = {};
    const Aluno = app.models.index.Aluno
    const User = app.models.index.User
    const Carteira = app.models.index.Carteira
    const CarteiraService = app.services.carteiraService;

    aluno.index = async (req,res) => {

      const alunos = await Aluno.findAll({ raw: true });

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
      const role = "op_adm";
      try{
        const userEntity = await User.create({ 
          email,
          senha,
          role
        });


        const userId = userEntity.id;
        const saldo = 0;
        const carteiraEntity = CarteiraService.create(userId, saldo);

        const carteiraId = carteiraEntity.id;
        const alunoEntity = await Aluno.create({ 
          nome,
          cpf, 
          rg,
          instituicaoEnsino,
          curso,
          endereco,
          carteiraId,
          userId
        });

        return res.redirect('/alunos')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.getById = async (req,res) => {

      try{
        const aluno = await Aluno.findOne({ raw: true, where: { id: req.params.id } });

        return res.render('aluno/edit', { aluno: aluno })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.update = async (req,res) => {
 
      try{

        let aluno = await Aluno.findByPk(req.params.id)
        aluno = await aluno.update(req.body)

        return res.redirect('/alunos')
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
        return res.redirect('/alunos')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    aluno.getCarteira = async (req,res) => {

      const carteira = await Carteira.findOne({ raw: true, where: { userId: req.params.userId } });
      const alunos = await Aluno.findAll({ raw: true });

      try{
        return res.format({
          html : () => {
              res.render('aluno/index', { alunos: alunos, carteira: carteira,  userId: req.params.userId });
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }


    return aluno;
  }