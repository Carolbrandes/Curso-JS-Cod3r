// var tem escopo global e de funcao
// o let tem escopo de bloco, funcao e global

let numero = 1

{
        let numero = 2
        console.log('Dentro: ', numero)
        // vai dar preferencia ao escopo menor, e se nao existir ai ele vai procurar no escopo maior.
}

console.log('Fora: ', numero)

// usando let em loop
// o i sera visivel apenas no bloco for
for(let i = 0; i<10; i++){
        console.log(i)
}

// aqui o i nao esta definido
//console.log('i = ', i)



// ex 2
// como usamos o let qd imprimimos fora do escopo do bloco, ele consegue guardar e respeitar o valor q de i em cada passagem no loop.
// tem haver com o conceito de  "clousere"
const funcs = []

for (let i = 0;  i < 10; i++){
       funcs.push(function () {
               console.log(i)
       })
}

funcs[2]()
funcs[8]()