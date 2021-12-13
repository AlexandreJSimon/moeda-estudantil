module.exports = (app) => {
  
    const vantagem = {};
    const Vantagem = app.models.index.Vantagem

    vantagem.index = async (req,res) => {

        vantagem = await Empresa.findAll({ raw: true });

      try{
        return res.format({
          html : () => {
              res.render('vantagem/index', { empresas: empresas});
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    vantagem.new = async (req,res) => {
      try{
        return res.format({
          html : () => {
              res.render('vantagem/new');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    vantagem.register = async (req,res) => {
        const { nome, descricao, foto, valor } = req.body;
        try{
  
          const Vantagem = await Vantagem.create({ 
            nome,
            descricao, 
            foto,
            valor,
          });
  
          return res.redirect('/vantagem')
        }catch(err){
          return res.status(400).send({ error: 'Bad Request' });
        }
    }

    vantagem.resgate = async (req,res) => {
        const { emailRemetente, emailParceiro, valor } = req.body;
        
        const vantagemId =  req.params.vantagemId;

        CarteiraService.buy(valor, emailRemetente, emailParceiro, vantagemId);

        try{
            return res.redirect('/')
        }catch(err){
          return res.status(400).send({ error: 'Bad Request' });
        }
    }

    return vantagem;
}