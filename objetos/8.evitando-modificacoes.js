// Object.preventExtensios - voce nao consegue adicionar novos atributos. Mas é possivel excluir atributos.
const produto = Object.preventExtensions({
        nome: 'Qualquer',
        preco: 1.99,
        tag: 'promoção'
})

console.log("Extensivel:", Object.isExtensible(produto))
produto.nome = "borracha"
produto.descricao = "borracha escolar branca" // essa linha sera ignorada
delete produto.tag
console.log(produto)

// Object.seal
// selando o objeto vc nao consegue add novos atributos,
//não consegue excluir atributos, mas consegue alterar atributos já existentes.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // sera ignorado
delete pessoa.nome // sera ignorado
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = q é um objeto selado + com valores constantes, voce nao consegue alterar o valor dos atributos.