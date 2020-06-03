// hoisting - move a declaracao de uma variavel para o topo da aplicação
// Hoisting com var
console.log('a = ', a)
var a = 2 // vai dar undefined

// por debaixo dos panos ele fez:
// var a 
// console.log('a = ', a)
// a = 2
// isso e o hoisting

// a var a vai "issada", sera jogada para cima

// Hoisting com let

// vai gerar erro
//console.log('b = ', b)
let b = 2

