// funcao em js é First-class Object
// high-order function
// funcoes tb são tratados como dados, podemos passar como parametro, guardar em variaveis, podemos ter funcoes dentro de funcoes, podemos retornar funcoes

// criar de forma literal
// se nao colocarmos explicitamente o return, ele retorna como undefined
// o bloco as chaves sao obrigatorias nas funcoes tradicionais
function fun1() {}

// armazenar funcao na variavel
// para inovacar a funcao basta colocar o nome da variavel + parentesis
const fun2 = function (){}

// armazenar em um array
const array = [function (a, b){return a+b}, fun1, fun2]

// executando a primeira funcao do array
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
        return "opa"
}

console.log(obj.falar())

// passar uma funcao como parametro para outra funcao

function run(funcao) {
     funcao()   
}

run(function () {
        console.log('Executando..')
})

// funcao retornando outra funcao
function soma(a,b) {
        return function (c){
                console.log(a+b+c)
        }
}

// a soma(2,3) retorna uma funcao que vai receber apenas um parametro q e o 4
soma(2,3)(4)