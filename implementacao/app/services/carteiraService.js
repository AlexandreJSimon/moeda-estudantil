module.exports = (app) => {
  const carteiraService = {};
  const Carteira = app.models.index.Carteira;
  const User = app.models.index.User

  carteiraService.create = async (userId,saldo) => {
    try{

      const carteiraEntity = await Carteira.create({ 
        saldo,
        userId
      });

      return carteiraEntity;
    }catch(err){
      throw new Error('Erro ao criar carteira');
    }
  }

  carteiraService.transfer = async (mensagem, valor, remetenteId, destinarioId) => {
    try{

      const destinario = await User.findOne({ raw: true, where: { id: destinarioId } });
      const remetente = await User.findOne({ raw: true, where: { id: remetenteId } });

      if(isEmpty(destinario) ||isEmpty(remetente) ){
        throw new Error('Nenhum usuario encontrado');
      }

      const carteiraDestinario = await User.Carteira({ raw: true, where: { userId: destinarioId } });
      const carteiraRemetente = await User.Carteira({ raw: true, where: { userId: remetenteId } });

      if(isEmpty(carteiraDestinario) ||isEmpty(carteiraRemetente) ){
        throw new Error('Erro, por favor tente novamente mais tarde');
      }

      if(carteiraRemetente.saldo - valor < 0){
        throw new Error('Saldo insuficiente');
      }

      await carteiraRemetente.update({
        saldo: carteiraRemetente.saldo - valor
      })

      await carteiraDestinario.update({
        saldo: carteiraRemetente.saldo + valor
      })

    }catch(err){
      throw new Error('Erro ao realizar transacao');
    }
  }

  return carteiraService;
};
