// metodo para concatenar varios arrays em um novo array. Os arrays originais nao sao mexidos.
const filhas = ['Beatriz', 'Laura']
const filhos = ['Rodrigo', 'Bernardo']
// podemos passar quantos parametros nos quisermos.
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

// podemos usar o concat tb em um array vazio:
console.log([].concat([1,2], [3,4], 5, [[6,7]]))

