# moeda-estudantil

<h2>Requisitos</h2>
 
O projeto roda em container, portanto, para que ele funcione corretamente, é necessário instalar o [docker](https://docs.docker.com/get-docker/) e o [docker-compose](https://docs.docker.com/compose/install/)
 
<h2>Características do projeto</h2>
 
O projeto está sendo desenvolvido em **node** tendo sua infraestrutura rodando em **containers**.
 
Sobre os containers, estamos utilizando duas imagens, uma imagem contem o **node** e a outra contém o banco de dados **mysql**
 
<h2>Subindo os Serviços</h2>
 
Para rodar o projeto é necessário subir os containers que possuem os serviços necessários para o projeto rodar. Para isso basta rodar o comando **docker-compose up** no console estando no diretório **implementacao** do projeto. Na primeira vez que este comando for executado o download dos containers será realizado e após o download os serviços irão subir.
 
Para desativar os containers basta pressionar **ctrl+c** no console.

<h2>Configurações básicas</h2>
 
Inicialmente é necessario instalar as dependencias no projeto, para isso precisamos rodar o comando **docker-compose run project npm install**. Tambem É necessario rodar as **migrations** para que as tabelas do banco de dados sejam criadas, para isso é necessário rodar o comando **docker-compose run project npx sequelize-cli db:migrate** estes comandos devem ser executados em uma aba do terminal diferente da que o projeto está rodando.

Para acessar o sistema, basta ir até o navegador e digitar o endereço http://localhost:3000 .


<h2>História de usuário</h2>
UC1 - Como Aluno eu preciso me cadastrar no Sistema, para que possa receber os créditos.</br>
UC2 - Como Professor gostaria de enviar moedas para Alunos, dado seu bom comportamento.</br>
UC3 – Como Aluno desejo ser notificado por e-mail ao receber moedas, para que possa acompanhar meu saldo.</br>
UC4 – como Aluno/Professor desejo consultar meu extrato, para que possa acompanhar meu saldo e operações realizadas.</br>
UC5 – Como Aluno desejo trocar minhas moedas por vantagens cadastradas no sistema.</br>
UC6 – Eu como Empresa Parceira preciso me cadastrar no sistema, para oferecer minhas vantagens.</br>
UC7 – Eu como Empresa Parceira preciso cadastrar as vantagens para que o Aluno possa trocar por moedas.</br>
UC8 – EU como Empresa Parceira/ Aluno preciso receber um email com o código para confirmar a troca de moedas por vantagens.</br>
UC9 – Como Empresa Parceira/ Aluno preciso estar autenticado para que possa ter acesso ao sistema.</br>

<h2>Diagrama de classe</h2>
https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1jf3catQHwQKQ-LNYKNlPy3Qum3W7xKjN%26export%3Ddownload

<h2>Diagrama de sequência</h2>
https://drive.google.com/file/d/1uBf5Ou7Y1c0E7oe3hEYiXgiMWWrWEWBy/view?usp=sharing

