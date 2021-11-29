module.exports = (app) => {
  app.prefix('/', (public) => {
    //user routes
    public.get('/', app.controllers.user.index);
    
    public.get('/alunos', app.controllers.aluno.index);
    public.get('/aluno/new', app.controllers.aluno.new);
    public.post('/aluno/new', app.controllers.aluno.register);

    //TODO o usuario só poderá ser criado juntamente com uma entidade (aluno, professor e empresa) tendo uma relacao entre as mesmas

    //public.get('/user/new', app.controllers.user.new);
    //public.post('/user/new', app.controllers.user.register);
    //public.get('/user/delete/:id', app.controllers.user.delete);
    //public.get('/user/update/:id', app.controllers.user.getById);
    //public.post('/user/update/:id', app.controllers.user.update);
  });    
}