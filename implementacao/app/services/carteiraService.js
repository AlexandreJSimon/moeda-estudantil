module.exports = (app) => {
  const CarteiraService = {};
  const Carteira = app.models.index.Carteira;


  CarteiraService.create = async (userId,saldo) => {
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

  CarteiraService.transfer = async (mensagem, remetenteId, destinarioId) => {
    try{


    }catch(err){
      throw new Error('Erro ao criar carteira');
    }
  }

  return CarteiraService;
};
