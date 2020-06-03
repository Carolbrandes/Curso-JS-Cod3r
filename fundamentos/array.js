const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0])

// caso nos tentarmos acessar um indice inexistente ele retorna undefined

// atribuimos ao array no indice 4 o valor 10
valores[4] = 10

// acessar o numero de elementos
console.log(valores.length)

// add elem no final do array
// add varios elementos e cada um dele vai ocupar um indice diferente do array
// nao e boa pratica misturar dados de tipo diferente, e bom termos arrays homogeneos
valores.push({id:3}, false, null, 'teste')
console.log(valores)

// para deletar elementos do array
// o pop ele retorna e exclui o ultimo elemento do array
console.log(valores.pop())

// vai deletar o valor de indice zero do array
delete valores[0]

console.log(valores)

// o array e do tipo object
console.log(typeof valores)

