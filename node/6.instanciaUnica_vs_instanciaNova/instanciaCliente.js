// o contadorA é igual ao contadorB, sao os mesmos objetos.
const contadorA = require('./contadorA')
const contadorB = require('./contadorA')

// aqui vamos chamar a funcao
//require('./contadorB') - retorna uma funcao e qd add () retorna um objeto. Pq estamos invocando a funcao retornada.
const contadorC = require('./contadorB')()
const contadorD = require('./contadorB')()


// a e b sao iguais, sao os mesmo objetos
contadorA.incrementar()
contadorA.incrementar()
console.log(contadorB.valor)

// aqui o contadorC gera um objeto e o contadorD gera outro objeto, sao objetos diferentes.
contadorC.inc()
contadorD.inc()
contadorD.inc()
console.log(contadorC.valor, contadorD.valor)
