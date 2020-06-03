// a const a ela tem o endereco q esse objeto esta localizado
const a = {name: 'Teste'}

// na const b recebe o mesmo endereco q o a aponta na memoria. Entao aqui os enderecos foram igualados, e uma atribuicao por referencia
const b = a
b.name = 'Opa'

// mesmo tendo mudado o atrib name a partir da const b, qd eu dou o console na const a o nome tb é alterado, pois tanto a e b tem o mesmo endereco da memoria que esta localizado o objeto
console.log(a)
console.log(b)

// para objetos, funcoes eles tem um endereco de referencia na memoria

// ja qd tratamos de tipos primitivos, as variaveis tem o valor na memoria e nao uma referencia
// no ex abaixo c e d sao independentes, o q eu fizer com a variavel d nao vai influenciar na variavel c
let c = 3
let d = c
d++
console.log(c)
console.log(d)

// undefined - variaveis nao incializadas
// null - a variavel n aponta para nenhum endereco de memoria e nenhum valor primitivo.

let valor
console.log(valor)

// inicializamos a variavel, porem ela n aponta com nehum end de memoria
// para zerar o valor de uma variavel usamos null
valor = null
console.log(valor)

const produto = {} // o produto nao e nulo, ele esta definido

// vai ter como resultado undefined, pq nao foi atribuido a propriedade preco ao produto
console.log(produto.preco)

produto.preco = 3.5
console.log(produto)

// podemos apagar uma propriedade
// evite atribuir undefined
delete produto.preco
console.log(produto)

produto.preco = null // isso quer dizer q o produto esta sem preco, que nao foi definido ainda

// convertendo para bool
console.log(!!produto.preco)
