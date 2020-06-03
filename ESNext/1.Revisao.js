// 1) let e const  - tem escopo de bloco
{
        var a = 2
        let b = 3
}

console.log(a) /* consegue acessar e vai exibir 2 */
//console.log(b) /* vai dar undefined, o b so pode ser acesso dentro do escopo declarado.*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------


// 2) template string - interpolacao. Conseguimos na string interpretar variaveis e ele respeita quebra de linha
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// -------------------------------------------------------------------------------------------------------------------------------------------------------


// 3) Destructuring 

//ex 1: string
// a variavel l vai armazenar a letra C
// a variavel e vai armazenar a letra o
// a variavel tras vai armazenar o restante das letras

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) /*  vai imprimir: C o [ 'd', '3', 'r' ]*/

// ex2: arrays
const [x, y] = [1,2,3]
console.log(x, y)

// ex3: objetos
//idade: i estou renomeando
const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// 4) arrow function 
// funcoes arrows sao sempre anonimas
// prioriza escrever funcoes de apenas uma linha
// o return fica implicito qd temos uma funcao de uma unica linha, caso tenha mais linhas temos q declarar explicitamente o return
// o this esta associado no local q a funcao foi escrita
// o bind nao funciona para mudar o contexto
// nas funcoes tradicionais o this aponta para global, ja na arrow function o this no contexto do node aponta para module exports

const soma = (a,b) => a + b
console.log(soma(2,3))

// -------------------------------------------------------------------------------------------------------------------------------------------------------


// 5) parametros default:
function log(texto = 'Node') {
        console.log(texto)
}

// vai imprimir o valor padrao
log() 
log(undefined)

// nao vai imprimir o valor padrao
log("novo valor")
log(null)

// -------------------------------------------------------------------------------------------------------------------------------------------------------


//6) operador rest
// a ideia ter parametros variaveis e esses parametros serao agrupados em um array dentro da funcao
function total (...numeros) {  
        let total = 0
        numeros.forEach(n => total += n)
        return total
}

console.log(total(2, 3, 4, 5))

// -------------------------------------------------------------------------------------------------------------------------------------------------------


// 7) No  ES8 (js 2017) passamos a ter o Object.values / Object.entries 
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// -------------------------------------------------------------------------------------------------------------------------------------------------------


//8) melhorias na notação literal
// nao precisamos mais colocar nome: nome
// nao precisamos mais declarar funcoes assim: const ola: function (){}
const nome02 = 'Carla'
const pessoa = {
        nome02,
        ola(){return 'ola'}
}

console.log(pessoa.nome02, pessoa.ola())

// -------------------------------------------------------------------------------------------------------------------------------------------------------


// 9) class - é uma funcao
class Animal {}
class Cachorro extends Animal{
        falar(){
                return 'Au au!'
        }
}

console.log(new Cachorro().falar())






