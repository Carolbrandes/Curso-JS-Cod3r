// Nota: nao estamos armazenando em uma variavel, estamos apenas carregando ele, uma vez q ele é carregado, aquilo que voce colocou no global fica disponivel na sua aplicacao inteira
require('./global')

console.log(minhaApp.saudacao())

// para nao mudar o nome, podemos utilizar o freeze
minhaApp.nome = 'mudei nome'
console.log(minhaApp.nome)