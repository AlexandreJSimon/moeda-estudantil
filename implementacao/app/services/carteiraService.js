module.exports = (app) => {
  const carteiraService = {};
  const Carteira = app.models.index.Carteira;


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

  carteiraService.transfer = async (mensagem, remetenteId, destinarioId) => {
    try{


    }catch(err){
      throw new Error('Erro ao criar carteira');
    }
  }

  return carteiraService;
};
