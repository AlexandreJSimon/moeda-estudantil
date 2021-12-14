module.exports = (app) => {
    const Operacao = app.models.index.Operacao
    const User = app.models.index.User
    var db = app.models.index;


    const extrato = {};

    extrato.index = async (req,res) => {
        try{

        const user = await User.findOne({ raw: true, where: { id: req.params.id } });


        const extratoEntity = await db.sequelize.query(
            `SELECT * FROM Operacaos WHERE userEmailRemetente = '${user.email}'  or userEmailDestinatario = '${user.email}'`
          );

  console.log(extratoEntity);
       
        return res.format({
                html : () => {
                    res.render('extrato/index', { extrato: extratoEntity});
                }
              });;
        }catch(err){
            console.log(err);
          return res.status(400).send({ error: 'Bad Request' });
        }
      }

    return extrato;
  }