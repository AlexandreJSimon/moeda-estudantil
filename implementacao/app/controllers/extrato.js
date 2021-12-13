module.exports = (app) => {
    const Operacao = app.models.index.Operacao
    const User = app.models.index.User
    var db = app.models.index;


    const extrato = {};

    extrato.index = async (req,res) => {

        const user = await User.findOne({ raw: true, where: { id: req.params.id } });

        const extratoEntity = await Operacao.findAll({ raw: true, where: {
             [db.sequelize.or]: [{userEmailRemetente:  user.email}, {userEmailDestinatario:  user.email}]
             } });

        console.log(extratoEntity);
  
        try{
            return res.format({
                html : () => {
                    res.render('extrato/index', { alunos: alunos});
                }
              });;
        }catch(err){
          return res.status(400).send({ error: 'Bad Request' });
        }
      }

    return extrato;
  }