module.exports = (app) => {
    const extratoService = {};
    const Operacao = app.models.index.Operacao
    const CarteiraService = app.services.carteiraService;
    const User = app.models.index.User
    var db = app.models.index;
  
    extratoService.addOperacao = async (mensagem,userEmailRemetente, userEmailDestinatario, valor) => {
      try{
        console.log("--------------ENTROU-----------------")

  
        const extratoEntity = await Operacao.create({ 
            valor,
            mensagem,
            userEmailRemetente,
            userEmailDestinatario
        });
    
        console.log("-------------------------------")
        console.log(extratoEntity)
        console.log("-------------------------------")


        return extratoEntity;
      }catch(err){
        throw new Error('Erro gerar extrato');
      }
    }
    
    extratoService.listByUserEmail = async (email) => {
        try{
    
        const extratoEntity = await Operacao.findAll({ raw: true,
            where: {
                $or: [
                    {
                        userEmailRemetente: email
                    }, 
                    {
                        userEmailDestinatario: email
                    }
                ]}
            });
      
          console.log("-------------------------------")
          console.log(extratoEntity)
          console.log("-------------------------------")
  
  
          return extratoEntity;
        }catch(err){
          throw new Error('Erro gerar extrato');
        }
      }
  
  return extratoService;
};
  