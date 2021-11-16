module.exports = (app) => {
  app.prefix('/', (public) => {
    //user routes
    public.get('/', app.controllers.user.index);
    public.get('/user/new', app.controllers.user.new);
    public.post('/user/new', app.controllers.user.register);
    public.get('/user/delete/:id', app.controllers.user.delete);
    public.get('/user/update/:id', app.controllers.user.getById);
    public.post('/user/update/:id', app.controllers.user.update);
  });    
}