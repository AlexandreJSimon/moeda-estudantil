# Código do Projeto
 
Mantenha neste diretório todo o código do projeto. Se necessário, descreva neste arquivo aspectos relevantes da estrutura de diretórios criada para organização do código.
 
# Requisitos
 
O projeto roda em container, portanto, para que ele funcione corretamente, é necessário instalar o [docker](https://docs.docker.com/get-docker/) e o [docker-compose](https://docs.docker.com/compose/install/)
 
# Características do projeto
 
O projeto está sendo desenvolvido em **node** tendo sua infraestrutura rodando em **containers**.
 
Sobre os containers, estamos utilizando duas imagens, uma imagem contem o **node** e a outra contém o banco de dados **mysql**
 
# Subindo os Serviços
 
Para rodar o projeto é necessário subir os containers que possuem os serviços necessários para o projeto rodar. Para isso basta rodar o comando **docker-compose up** no console estando no diretório **implementacao** do projeto. Na primeira vez que este comando for executado o download dos containers será realizado e após o download os serviços irão subir.
 
Para desativar os containers basta pressionar **ctrl+c** no console.
 
# Configurações básicas
 
Inicialmente é necessario instalar as dependencias no projeto, para isso precisamos rodar o comando **docker-compose run project npm install**. Tambem É necessario rodar as **migrations** para que as tabelas do banco de dados sejam criadas, para isso é necessário rodar o comando **docker-compose run project npx sequelize-cli db:migrate** estes comandos devem ser executados em uma aba do terminal diferente da que o projeto está rodando.

Para acessar o sistema, basta ir até o navegador e digitar o endereço http://localhost:3000 .
