module.exports = (app) => {
  app.prefix('/', (public) => {
    //user routes
    public.get('/', app.controllers.user.index);
    
    //Aluno routes
    public.get('/alunos', app.controllers.aluno.index);
    public.get('/aluno/new', app.controllers.aluno.new);
    public.post('/aluno/new', app.controllers.aluno.register);
    public.get('/aluno/delete/:id', app.controllers.aluno.delete);
    public.get('/aluno/update/:id', app.controllers.aluno.getById);
    public.post('/aluno/update/:id', app.controllers.aluno.update);

    //Professor routes
    public.get('/professores', app.controllers.professor.index);
    public.get('/professor/new', app.controllers.professor.new);
    public.post('/professor/new', app.controllers.professor.register);
    public.get('/professor/delete/:id', app.controllers.professor.delete);
    public.get('/professor/update/:id', app.controllers.professor.getById);
    public.post('/professor/update/:id', app.controllers.professor.update);


    //Professor routes
    public.get('/empresas', app.controllers.empresa.index);
    public.get('/empresa/new', app.controllers.empresa.new);
    public.post('/empresa/new', app.controllers.empresa.register);
    public.get('/empresa/delete/:id', app.controllers.empresa.delete);
    public.get('/empresa/update/:id', app.controllers.empresa.getById);
    public.post('/empresa/update/:id', app.controllers.empresa.update);


    //TODO o usuario só poderá ser criado juntamente com uma entidade (aluno, professor e empresa) tendo uma relacao entre as mesmas

    //public.get('/user/new', app.controllers.user.new);
    //public.post('/user/new', app.controllers.user.register);
    //public.get('/user/delete/:id', app.controllers.user.delete);
    //public.get('/user/update/:id', app.controllers.user.getById);
    //public.post('/user/update/:id', app.controllers.user.update);
  });    
}