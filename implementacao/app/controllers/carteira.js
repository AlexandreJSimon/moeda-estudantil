module.exports = (app) => {
  
    const carteira = {};
    const Carteira = app.models.index.Carteira
    const CarteiraService = app.services.carteiraService;


    
    carteira.transferencia = async (req,res) => {
        const { emailRemetente, valor } = req.body;
        
        const destinarioId =  req.params.destinarioId;
        const mensagem = "";

        CarteiraService.transfer(mensagem, valor, emailRemetente, destinarioId);

        try{
            return res.redirect('/')
        }catch(err){
          return res.status(400).send({ error: 'Bad Request' });
        }
      }

    return carteira;
}