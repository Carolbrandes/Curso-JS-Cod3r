// valor literal
let isAtivo = false
isAtivo = true

isAtivo = 1 // se comporta como verdadeiro se colocarmos os !!

// para 1 representar um valor bool, colocamos os dois pontos de interrogação na frente
console.log(!!isAtivo)

// eles nao sao bool mas em um certo contexto ele geram valor verdadeiro

// os numeros inteiros com excecao do zero, retorna como verdadeiro
console.log(!!3) 
console.log(!!-1)

console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// casos que retorna como falso
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!'')
console.log(!!(isAtivo = false))

