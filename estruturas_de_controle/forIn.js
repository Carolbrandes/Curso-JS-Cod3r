// pode ser feito em um array e um objeto
// ele percorre pelos indices e nao pelos valores

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// o i e o indice
for(let i in notas){
        console.log(i, notas[i])
}

const pessoa = {
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 29,
        peso: 64
}

// e bom colocar o let para nao ter acesso ao atributos depois q terminar o for

for(let atributo in pessoa){
        console.log(`${atributo} = ${pessoa[atributo]}`)
}

