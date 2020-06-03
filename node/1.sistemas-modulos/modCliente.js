// o ./  esta referenciando um modulo que esta dentro do meu sistema, aqui usamos o caminho relativo

// no modulo A nao foi criado um objeto. Tinhamos um objeto vazio e fomos add propriedade a ele.

// no modulo b substituimos o objeto vazio padrao pelo um novo objeto

// para ter acesso ao que exportamos, usamos o require

// dentro da const modA tem td que foi exportado no arquivo modA.js
const modA = require('./modA')
const modB = require('./modB')

console.log(modA.ola)
console.log(modA.bemVindo)
console.log(modA.ateLogo)
console.log(modA)

console.log(modB.bomDia)
console.log(modB.boaNoite())
console.log(modB)