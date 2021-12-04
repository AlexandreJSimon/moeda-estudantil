const passport = require("passport");

module.exports = (app) => {
  
    const init = {};

    init.index = async (req,res) => {

      try{
        return res.format({
          html : () => {
              res.render('inicial/index');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return init;
  }