module.exports = (app) => {
    const extratoService = {};
    const Operacao = app.models.index.Operacao
  
    extratoService.addOperacao = async (mensagem,userIdRemetente, userIdDestinatario) => {
      try{
  
        const extratoEntity = await Operacao.create({ 
            mensagem,
            userIdRemetente,
            userIdDestinatario
        });
    
        console.log("-------------------------------")
        console.log(extratoEntity)
        console.log("-------------------------------")


        return extratoEntity;
      }catch(err){
        throw new Error('Erro gerar extrato');
      }
    }

    
    extratoService.listByUserId = async ( userId) => {
        try{
    
        const extratoEntity = await Operacao.findAll({ raw: true,
            where: {
                $or: [
                    {
                        userIdRemetente: userId
                    }, 
                    {
                        userIdDestinatario: userId
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
  