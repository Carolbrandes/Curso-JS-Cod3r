// o this aponta para module.exports
// as duas afirmativas abaixo são falsas, pq ele aponta para module.exports que por sua vez é a mesma coisa que exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


// dentro de uma funcao o this nao aponta para exports ou module exports, mas fora da funcao sim
// o this dentro de uma funcao ele aponta para global.
function logthis(){
        console.log('O this dentro de uma função:')
        console.log(this === exports)
        console.log(this === global)

        // qd voce faz isso, voce esta colocando dentro do escopo global:
        this.perigo = '...'
}

logthis()

// o this fora de uma funcao aponta para module.exports ou exports
// o this dentro de uma funcao aponta para global


