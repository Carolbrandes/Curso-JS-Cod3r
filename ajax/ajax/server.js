const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// vamos aplicar os middlewares sempre que acontecer uma requisicao
// middleware -> e uma funcao q sera executada qd determinada requisicao chegar
// pode ser algum middleware aplicado a um padrao de url  ou pode ser aplicado para todas as requisicoes 


// SERA APLICADO PARA QLQ REQUISICAO QUE CHEGAR NO SERVIDOR:
// SE QUISERMOS QUE SEJA REQUISICAO ESPECIFICA FICARIA:
// se alguma requisicao começar com /teste faça o bodyParser...
// app.use('/teste', bodyParser.urlencoded({extended: true}))
// 1º middleware -> aqui estamos dizendo que na pasta atual onde o arquivo server.js esta sirva os arquivos estaticos (html, css, js, fonts, dados)
app.use(express.static('.'));

// 2º middleware -> se vier algum dado a partir de um submit de um formulario, esse cod e responsavel por ler os dados e transformar em objeto
app.use(bodyParser.urlencoded({extended: true}));

// 3º middleware -> se no corpo da requisicao a resposta vier em json, esse codigo é responsavel por transformar o json em objeto
app.use(bodyParser.json());


// qd vier uma requisicao do tipo get na url /teste, chame a funcao que recebe o req e response e essa funcao vai retornar um ok. 
//  (req, res) => res.send('Ok') -> e uma funcao middleware q sera chamada qd o /teste for invocado a partir de uma requisicao do tipo get
app.get('/teste', (req, res) => res.send('Ok'));

// startar o servidor na porta 8080
app.listen(8081, () => console.log('Executando....'));





