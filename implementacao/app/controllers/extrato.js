
  const ExtratoService = app.services.extratoService;
  const User = app.models.index.User

module.exports = (app) => {
  
    const extrato = {};

    extrato.index = async (req,res) => {

      try{

        const user = await User.findOne({ raw: true, where: { id: req.params.userId } });

        const extratoEntity = ExtratoService.listByUserId(user.email);

        return res.render('extrato/index', { extrato: extratoEntity , email: user.email})

      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return extrato;
  }