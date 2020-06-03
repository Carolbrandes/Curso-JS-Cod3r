// objetivo da heranca e reutilizar codigo
// a heranca em js e baseado em prototipos
// ex: temos um objeto e ai tentamos acessar uma propriedade que nao tem no objeto, ai o js vai veriifcar se ele tem prototipo, se tiver ele vai tentar achar essa propriedade no prototipo. Ai se ele nao achar na hierarquia ele retorna undefined. 
// qd criamos um objeto com new automaticamente ele ja faz referencia a Object.prototype
// o atributo prototype so esta disponivel na funcao Objec mas nao nos seus "herdeiros". Pq esse atributo só está disponivel para as funcoes e nao para objetos (q sao os herdeiros)

const ferrari = {
        modelo: 'f40',
        velMax: 324
}

const volvo = {
        modelo: 'v40',
        velMax: 200
}

// a partir do atributo __proto__ eu consigo acessar qm e o prototipo do objeto 
// o prototipo de ferrari é um objeto vazio
console.log(ferrari.__proto__)

// vai dizer q e true
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

// vai dar null, pq ele e o mais alto da hierarquia
console.log(Object.prototype.__proto__ === null)

// Obs: Qd criamos um objeto de forma literal ou com new ele aponta para Object.prototype ou seja o prototipo dele é Object.prototype. Porém qd criamos um objeto atraves de uma funcao construtora isso nao acontece.

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

// cadeia de prototipos
// o avo aponta para Object.prototype
const avo = {
        attr1: 'A'
}
const pai = {
        __proto__: avo,
        attr2: 'B'
}
const filho = {
        __proto__: pai,
        attr3: 'C'
}
console.log(filho.attr1)

const carro = {
        velAtual: 0,
        velMax: 200,
        acelerar(delta) {
                if (this.velAtual + delta <= this.velMax) {
                        this.velAtual += delta
                } else {
                        this.velAtual = this.velMax
                }
        },
        status() {
                return `${this.velAtual}km/h de ${this.velMax}km/h`
        }
}

const ferrari2 = {
        modelo: 'f40',
        velMax: 324
}

const volvo2 = {
        modelo: 'v40',
        status(){
                return `${this.modelo}: ${super.status()}`
        }
}

// metodo para definir o prototipo
// aqui estamos definindo que o prototipo de ferrari vai ser o carro.
Object.setPrototypeOf(ferrari2, carro)
Object.setPrototypeOf(volvo2, carro)

console.log(ferrari2)

volvo2.acelerar(100)
console.log(volvo2.status())


const pai2 = {nome: 'Pedro', corCabelo: "preto"}

// criou um objeto novo ja apontando para pai2
const filho2 = Object.create(pai2)
filho2.nome = 'Ana'
console.log(filho2.corCabelo)

const filho3 = Object.create(pai2, {
        nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filho3.nome)
console.log(`${filho3.nome} tem cabelo ${filho3.corCabelo}`)

// nao mostra os atributos herdados
console.log(Object.keys(filho2))
console.log(Object.keys(filho3))

// ja aqui ja mostra o atributo herdado
for(let key in filho2){
        filho2.hasOwnProperty(key) ? 
        console.log(key):
        console.log(`Por herança ${key}`)
}

// qd criamos objetos a partir da funcao construtora, os objetos vao apontar para o prototype da função
function meuObjeto2(){
        console.log(meuObjeto2.prototype)
}

const obj1 = new meuObjeto2
const obj2 = new meuObjeto2
// apontam para o mesmo prototipo
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto2.prototype === obj1.__proto__)

// colocando atributos dinamicamente

meuObjeto2.prototype.nome="Antonio"
meuObjeto2.prototype.falar = function(){console.log(`Bom dia! Meu nome é ${this.nome}!`)}

obj1.falar()
obj2.nome = "Rafael"
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto2.prototype
obj3.falar()

console.log((new meuObjeto2).__proto__ === meuObjeto2.prototype)

console.log(meuObjeto2.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

// é null, depois do Object.prototype nao tem mais nenhum
console.log(Object.prototype.__proto__)

// funcao
console.log(typeof String)

// funcao
console.log(typeof Array)

// funcao
console.log(typeof Object)

// uma String, Array e Object como são funcoes, tem o atributo prototype.

// reverter a funcao
// split transformar uma string em um array
// reverse, reverte a ordem
// join gera uma string com elementos de um array
// dentro de um funcao com protytpe, voce acessa um array ou string com this
String.prototype.reverse = function () {
        return this.split(" ").reverse().join(' ')
}

console.log("escola cod3er".reverse())

Array.prototype.first = function () {
        return this[0]
}

console.log([1,2,3,4,5].first())


function Aula(nome, video){
        this.nome = nome
        this.video = video
}

// vai aponta para Aula.prototype
const aula1 = new Aula("bem vindo", 123)
const aula2 = new Aula("Até breve", 456)
console.log(aula1, aula2)

// o exemplo abaixo mostra o que acontece por debaixo dos panos qd usamos o operador new.
// ...param ele pega os parametros e coloca no um array, o nome disso é spread.
function novo(f, ...param) { 
        // como estamos simulando o new, vamos usar a notação literal
        const obj = {}
        obj.__proto__ = f.prototype
        f.apply(obj, param)
        return obj
 }

 const aula3 = novo(Aula, 'Bem vindo', 123)
 console.log(aula3)


// resumo: toda função tem o prototype que serve para incluir atributos e metodos que podem ser herdados por seus filhos. o __proto__ serve para alterar ou veriificar quem é o prototipo de um objeto*. Por padrão qd criamos objetos de forma literal ou com new o prototipo é Object.prototype, porém qd criamos um objeto com funcao construtora, o seu prototipo é a propria funcao. 
// *obs: a funcao construtora tb tem __proto__ que aponta para Function.prototype
// funcao => prototype
// objeto => __proto__

// nao sobrescrever metodos nativos da api do js, pq pode ter efeitos colaterais.