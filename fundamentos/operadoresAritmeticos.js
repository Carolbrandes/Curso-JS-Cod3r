// operadores aritmeticos = operadores binarios, atuam em cima de dois elementos

// ex1:
// const [a, b, c, d] - é uma destruturacao
// [3, 5, 1, 15] - estamos definindo o array, onde a vai valer 3, b vai valer 5 e etc 
// e uma forma reduzida de criar 4 variaveis

const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicao = a * b
const divisao = d / a 
const modulo = a % 2

console.log(soma, subtracao, multiplicao, divisao,modulo)

// Obs: qd colocamos -a temos um operador unario q influencia um único operando