// sera passada uma funcao de callback para o foreach
// dentro do foreach tem um laço for
// por padrao voce recebe tres parametros, o valor, indice e o proprio array respectivamente
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
//ex1
console.log("Exemplo 1:")
aprovados.forEach(function(nome, indice, array){
        console.log(`${indice + 1} ${nome}`)
        console.log(array)
})

// ex2 - foi passado so o nome como parametro
console.log("Exemplo 2:")
aprovados.forEach(nome => console.log(nome))

// ex3 - foi passado so o nome como parametro
const exibirAprovados = aprovado => console.log(aprovado)
console.log("Exemplo 3:")
aprovados.forEach(exibirAprovados)

// ex4 - implementacao do nosso proprio foreach
Array.prototype.forEach2 = function(callback){
        for(let i = 0; i < this.length; i++){
                callback(this[i], i, this)
        }
}

aprovados.forEach2(function(nome, indice, array){
        console.log(`${indice+1} ${nome}`)
        console.log(array)
})