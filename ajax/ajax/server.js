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
app.use(bodyParser.urlencoded({ extended: true }));

// 3º middleware -> se no corpo da requisicao a resposta vier em json, esse codigo é responsavel por transformar o json em objeto
app.use(bodyParser.json());


// qd vier uma requisicao do tipo get na url /teste, chame a funcao que recebe o req e response e essa funcao vai retornar um ok. 
//  (req, res) => res.send('Ok') -> e uma funcao middleware q sera chamada qd o /teste for invocado a partir de uma requisicao do tipo get
// app.get('/teste', (req, res) => res.send('Ok'));
// app.get('/teste', (req, res) => res.send(new Date));


const multer = require('multer'); /** interpretar o formulario que vai vir o arquivo do upload */


// diskStorage -> é para fazer a configuracao e podemos personalizar a pasta em os arquivos serão salvos e tb o nome do arquivo no momento de salva-lo
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload') /** vamos salvar na pasta upload entao vamos criar essa pasta */
    },

    filename: function(req, file, callback) {
        // o Date.now() -> vai retornar em milesegundos
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')
    // single('arquivo') -> vamos receber na requisicao o arquivo com o nome de arquivo

// temos uma rota que é '/upload'
// vamos fazer uma requisicao via post enviando o arquivo que fizermos upload para a rota /upload
app.post('/upload', (req, resp) => {
    // no momento que o upload for concluido ele vai chamar a funcao callback que passamos via parametro
    upload(req, resp, err => {
        if (err) {
            // colocamos um return para que ele ja saia da funcao e nao continue executando as outras linhas de codigo
            return resp.end('Ocorreu um erro.')
        }

        // caso o erro esteja vazio, ele vai executar a linha abaixo
        resp.end('Concluido com sucesso.')
    })
})

// startar o servidor na porta 8080
app.listen(8081, () => console.log('Executando....'));

// por padrao quando acessamos a url localhost:8081 ele vai procurar e servir a pag index.html
// criamos o webservice/teste, se acessarmos localhost:8081/teste ele vai exibir "ok" que foi o que programos para ele responder na linha 26.
// ja na linha 27 colocamos que a função middleware vai responder com  a data mais atual.barreira