# Introdução Back-End

## Oque é Back-End e Front-End?

### Back-End
O back-end é a estrutura invisível que roda nos servidores, responsável por processar dados, gerenciar o banco de dados e garantir a segurança e o funcionamento de um site ou aplicativo. 

### Front-End
O front-end é a camada visível e interativa de um site ou aplicativo, responsável por tudo o que o usuário vê, clica e experimenta diretamente na tela. 

## Visual e Interativo
O front-end é a camada visível e interativa de um site ou aplicativo, responsável por tudo o que o usuário vê, clica e experimenta diretamente na tela. 

## Como eles Conversam
O front-end e o back-end se comunicam através de APIs por meio de requisições e respostas HTTP, onde o front-end solicita ações ou dados e o back-end os processa no servidor para enviá-los de volta à tela. 

## Oque é API?
Ela conecta sistemas internos e externos padronizando a comunicação através de ações diretas (como GET para buscar ou POST para salvar dados), envio de dados leves em formato JSON e validação por tokens de segurança

## Pacotes
Pacotes são soluções prontas para não reinventar a roda: o Front-End usa pacotes para criar telas, estilos e formulários no navegador, enquanto o Back-End usa pacotes para criar rotas de servidor, conectar ao banco de dados e proteger senhas.

## Comandos Do Node
### NPM 
Gerenciador de pacotes do node.js
### NPX
Executor de pacotes do node.js
### Chalk
O Chalk é um pacote para Node.js que serve para colorir e estilizar o texto no terminal.
Ele funciona de forma super simples: você passa o seu texto para o Chalk dizendo a cor ou estilo que quer, e ele devolve o texto pronto para aparecer bonito no console.
import chalk from 'chalk';

console.log(chalk.green('Sucesso!')); // Texto verde

console.log(chalk.red.bold('Erro grave!')); // Texto vermelho e em negrito

### Figlet
O Figlet (ou figlet no Node.js) é um pacote usado para transformar textos normais em artes gigantes feitas de caracteres no terminal (a famosa ASCII Art).

Ele funciona pegando cada letra da palavra que você digitou e "desenhando" uma versão grande dela usando traços, barras e outros símbolos do teclado.
import figlet from 'figlet';

figlet('Node.js', function (err, data) {
  console.log(data);
});
### NodeDemon
O Nodemon é uma ferramenta de desenvolvimento para Node.js que monitora automaticamente os arquivos do seu projeto e reinicia o servidor a cada alteração salva no código, eliminando a necessidade de parar e rodar a aplicação manualmente.

node index.js