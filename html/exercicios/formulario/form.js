//1º) cd html
// 2º) cd exercicios
// 3º) cd  formulario
// 4º) ls
// 5º) npm init -y - vai criar o arquivo package.json
// 6º) npm i --save express@4.16.3  body-parser@1.18.2 -E
// 7º) node form.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

// vai atender uma requisição post em cima da url /usuarios
app.post('/usuarios', (req, resp) => {
        console.log(req.body);
        resp.send('<h1>Parabéns usuario incluido</h1>');
});

// :id parametro usamos o :
app.post('/usuarios/:id', (req, resp) => {
        console.log(req.body);
        console.log(req.params.id);
        resp.send('<h1>Parabéns usuario alterado</h1>');
});

// se o usarmos o get req.query

app.listen(3003)

