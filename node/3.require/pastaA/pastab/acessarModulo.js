// caminho relativo
// podemos colocar no require, o caminho path do arquivo (q e o caminho absoluto) mas nao e muito recomendado, pq depois vamos implementar em outras maquinas. 
const moduloA = require('../../../1.sistemas-modulos/modA')

console.log(moduloA.ola)

// temos tb modulos do node
// como o http é um modulo interno do node, nao é necessário informar o caminho relativo
const http = require('http')

// aqui estamos passando uma funcao callback que recebe como parametro uma requisção e uma resposta.
// http.createServer((req, res) => {
//         // respondendo requisicao
//         res.write('bom dia')
//         // finalizando a requisicao
//         res.end()
// }).listen(8080) /* aqui ele vai ficar escutando na porta 8080 */

// para ver essa msg no write, basta acessar no navegador localhost:8080 - antes executar o codigo.

// como estamos usando o padrao index.js nao precisamos colocar o nome do arquivo, podemos parar na pastaC
const c = require('../../pastaC/index')
console.log(c.ola2)
