module.exports = (app) => {
  
    const transacao = {};
    const Transacao = app.models.index.transacao

    transacao.new = async (req,res) => {
      try{
        return res.format({
          html : () => {
              res.render('transacao/new');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    transacao.create = async (req,res) => {
        const { idUsuario, idVantagem, valor, data } = req.body;
        try{
  
          const Vantagem = await transacao.create({ 
            idUsuario,
            idVantagem, 
            valor,
            data,
          });
  
          return res.redirect('/')
        }catch(err){
          return res.status(400).send({ error: 'Bad Request' });
        }
    }

}