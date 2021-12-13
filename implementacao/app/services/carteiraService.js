module.exports = (app) => {
  const carteiraService = {};
  const Carteira = app.models.index.Carteira
  const User = app.models.index.User
  const ExtratoService = app.ExtratoService

 
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

  carteiraService.transfer = async (mensagem, valor, emailRemetente, destinarioId) => {
    try{

      const destinario = await User.findOne({ raw: true, where: { id: destinarioId } });
      const remetente = await User.findOne({ raw: true, where: { email: emailRemetente } });

      if(Object.keys(destinario).length === 0   || Object.keys(remetente).length === 0  ){
        throw new Error('Nenhum usuario encontrado');
      }

      const carteiraDestinario = await Carteira.findOne({  where: { userId: destinarioId } });
      const carteiraRemetente = await Carteira.findOne({  where: { userId: remetente.id } });
      
      valor = parseInt(valor);

      if(carteiraRemetente.saldo - valor < 0){
        throw new Error('Saldo insuficiente');
      }

      await carteiraRemetente.update({
        saldo: carteiraRemetente.saldo - valor
      })

      await carteiraDestinario.update({
        saldo: carteiraDestinario.saldo + valor
      })

      const userEmailRemetente= remetente.email;
      const userEmailDestinatario= destinario.email;

      await ExtratoService.addOperacao(mensagem, userEmailRemetente, userEmailDestinatario , valor );

    }catch(err){
      throw new Error('Erro ao realizar transacao');
    }
  }

    return carteiraService;
};
