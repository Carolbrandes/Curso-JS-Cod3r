// recurso novo do ES2015
// serve para acessar elemento de uma estrutura

// 1) Destructuring em objeto

const pessoa = {
        nome: 'Ana',
        idade: 5,
        endereco: {
                logradouro: 'Rua ABC',
                numero: 1000
        }
}

// as chaves representam o operador de destruturacao
// tire de dentro do obj pessoa os atributos nome e idade e atribui esses dados as variaveis nome e idade
const {nome, idade} = pessoa
console.log(nome, idade)
console.log(pessoa)


// se quisermos dar outro nome de variaveis
//const {nome: n, idade: i} = pessoa

// se acessarmos uma propriedade que nao existe
// no ex abaixo, estamos solicitando que se bemHumorada nao retorna nada, por padrão retorne true.
const{sobrenome, bemHumorada = true} = pessoa
// sobrenome deu undefined
// bemHumorada deu true
console.log(sobrenome, bemHumorada)

// nesse exemplo ele nao vai criar a variavel endereco
const {endereco: {logradouro, numero}} = pessoa

console.log(logradouro, numero)

// Obs: quando tentarmos acessar dados aninhados, temos que ter certeza que o caminhon para o dado esta correto.
// no exemplo abaixo vai dar um erro pq nao existe um atributo conta e muito menos cc e numero
//const {conta: {cc, numero}} = pessoa


// 2) Destructuring em array
// const [a] = [10]
// console.log(a)

// const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
// console.log(n1, n3, n5, n6)

// o 1 elem e ignorado
// o 2 elem e um array, dentro desse 2 array ignoramos o 1 elem 
//const [, [, nota]]


// 3) Destructuring em funcao

// a funcao rand vai receber como parametro os atributos min e max do meu objeto, sem precisar acessa-los com notacao ponto
// aqui no parametro estamos usando um operador destructuring
function rand({min = 0, max = 1000}) {
        const valor = Math.random() * (max - min) + min
        return  Math.floor(valor)
}

// aqui estou passando um objeto como parametro para funcao
console.log(rand({max: 50, min: 40}))


function rand2([min = 0, max = 1000]) {
        if(min > max) {
                [min, max] = /* destructuring*/
                 [max, min] // criando um novo array
        }

        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)        
}

console.log(rand2([50, 40]))
console.log(rand2([992]))





