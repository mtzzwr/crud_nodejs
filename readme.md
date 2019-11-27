# CRUD SIMPLES COM NODE JS

__O que é um CRUD?__
- C - Create
- R - Read
- U - Update
- D - Delete

__O que é o NodeJS?__
- O NodeJS pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

__Estrutura de pastas do projeto__
- A imagem abaixo apresenta como ficou a estrutura geral do projeto, contendo as pastas e seus arquivos.

![](img\1.PNG)

__Como subir o servidor do projeto em Node__
- Nessa imagem possui o comando para rodar o arquivo no servidor. É preciso somente colocar 'node' + nome do arquivo
que ele será iniciado.

![](img\2.PNG)

__Inserção de um registro no banco de dados (MySQL)__
- A imagem a seguir mostra a URL da aplicação na parte superior, no método POST, para poder realizar a inserção. 
Além de mostrar a estrutura do JSON contendo os campos da tabela do banco do lado esquerdo, e os valores a serem
armazenados na tabela.

![](img\3.PNG)

- Caso dê tudo certo, um 'status code' é apresentado na parte superior com '200 ok'. Também é mostrado os dados cadastrados durante a inserção já na tabela do MySQL, com 2 novos campos que são criados automaticamente pelo Sequelize.

![](img\4.PNG)

__Exibir um registro específico da tabela__
- Para exibir um registro em específico, é usado o método GET, passando um parâmetro na URL da requisição, que no caso é o ID que eu desejo buscar no banco.

![](img\5.PNG)

- A imagem a seguir mostra o retorno dessa busca, que foi pelo ID de número 1 e retornou todos os dados desse registro. 

![](img\6.PNG)

__Editar um registro específico da tabela__
- Para editar um registro da tabela, é usado o método PUT passando um parâmetro na URL da requisição, que no caso é o ID que eu desejo editar.

- Na imagem abaixo, é colocado em cada campo os dados que eu desejo alterar, que nesse cado foi o nome, o salário e o campo ativo do ID de número 1.

![](img\7.PNG)

__Deletar um registro específico da tabela__
- Para deletar um registro da tabela, é usado o méto DELETE passando um parâmetro na URL da requisição, que no caso é o ID que eu desejo deletar, no caso o usuário de ID número 2.

![](img\8.PNG)

- E por fim, usamos novamente o método GET, mas dessa vez para exibir todos os usuários cadastrados no banco.

![](img\9.PNG)

-- E no resultado, não temos o usuário de ID número 2, pois o mesmo foi excluído.
![](img\10.PNG)

**_Mateus Gonçalves - 27/11/2019_**


