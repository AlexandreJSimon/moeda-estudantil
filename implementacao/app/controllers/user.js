const passport = require("passport");

module.exports = (app) => {
  
    const user = {};
    const User = app.models.index.User

    user.index = async (req,res) => {

      users = await User.findAll({ raw: true });

      try{
        return res.format({
          html : () => {
              res.render('user/index', { users: users});
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    user.new = async (req,res) => {
      try{
        return res.format({
          html : () => {
              res.render('user/new');
          }
        });
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }
    
    user.register = async (req,res) => {
      const { email, senha , role } = req.body;
      try{
        const create = await User.create({ 
          email, 
          senha, 
          role 
        });

        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    user.getById = async (req,res) => {

      try{
        const user = await User.findOne({ raw: true, where: { id: req.params.id } });
        return res.render('user/new', { user: user })
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    user.update = async (req,res) => {
      const { email, senha, role } = req.body;

      try{
        await User.update({
          email: email, 
          senha: senha, 
          role: role 
        }, { where: { id: req.params.id }})

        return res.redirect('/')
      }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    user.delete = async (req,res) => {
      try{
        User.destroy({
          where: {
              id: req.params.id
          }
        })
        return res.redirect('/')
      }catch(err){
        return res.status(400).send({ error: 'Bad Request' });
      }
    }

    return user;
  }