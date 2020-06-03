// vai ser uma funcao
console.log(typeof Object)

// vai ser um objeto
// é um objeto que foi criado a partir de uma funcao
console.log(typeof new Object)

const cliente = function () {}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto{} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)

// criamos um objeto a partir de uma funcao
// qd voce cria um objeto de forma literal voce ja tem uma instancia com parentesis
