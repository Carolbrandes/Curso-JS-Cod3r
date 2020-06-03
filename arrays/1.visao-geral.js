// o array e um objeto, ao inves de organizar atraves de chaves, ele organizar atraves de indices. 

console.log(typeof Array, typeof new Array, typeof [])

// formas de criar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

// add novos elementos no array
aprovados[3] = 'Paulo' /*  é mais comum usarmos essa notação qd vamos alterar o valor de um elemento do array*/
aprovados.push('José')
console.log(aprovados.length)

console.log(aprovados)
// a funcao sort vai ordenar o array. Ele altera o array.
aprovados.sort()
console.log(aprovados)

// ele vai excluir porem nao reordenar o array, no lugar do elemento que foi excluido, vai ficar como undefined.
delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

// a funcao splice serve para add e/ou remover elementos de um array.
// nesse exemplo ele vai no inice 1 e vai excluir um elemento
// se quisessemos excluir dois elementos ele iria excluir o de indice 1 e indice 2.
// depois ele vai add o elemento1 e elemento2 nos indices 1 e 2
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)

// para nao apagar nenhum elemento e apenas add:
aprovados.splice(2, 0, "Elemento3")
console.log(aprovados)

// resumo do splice:
// so add:  aprovados.splice(1, 0, "elementoadicionado")
// so remover: aprovados.splice(1, 2) - a partir do indice ele excluir dois elementos
// add e remover - aprovados.splice(1, 2, "elementoAdd")

// sintaxe splice: array.splice(index, howmany, item1, ....., itemX)
//index: Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
//howmany: Optional. The number of items to be removed. If set to 0, no items will be removed
// item1: Optional. The new item(s) to be added to the array


