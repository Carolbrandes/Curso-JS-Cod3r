// esse metodo vai transformar uma lista de nomes em uma lista de saudacao com nome de cada pessoa.
module.exports = function (...nomes) {
        return nomes.map(nome => `Boa semana ${nome}!`)
  }