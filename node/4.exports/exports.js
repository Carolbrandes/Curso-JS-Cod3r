console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 /* isso quer dizer o a será visivel fora do arquivo*/
exports.b = 2 // o b tb ficara visivel fora
module.exports.c = 3 // tb fica visivel

exports = null
console.log(module.exports)

// mesmo atribuindo null para exports ele continua apontando para o que foi setado anteriormente. pq tanto o this, exports e module.exports sao variaveis que apontam para o mesmo endereco de memoria.
// porem o unico que sera retornado, exportado e o module.exports

// esse objeto nao sera retornado, pq aqui mudamos a referencia do exports para um outro objeto
exports = {
        nome: 'teste'
}

// para seguir o raciocino acima e dar certo, temos que fazer:
// sempre q quisermos atribuir um novo objeto para ser exportado, temos que usar o module.exports
module.exports = {
        publico: true
}

console.log(module.exports)

// o this e o export sao duas referencias que apontam para o objeto vazio.

