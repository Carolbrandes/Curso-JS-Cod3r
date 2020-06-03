// mais duas formas de se chamar a funcao
// funcao q sera chamada
function getPreco(imposto = 0, moeda = 'R$'){
        return `${moeda} ${this.preco * (1 - this.desc) * (1+imposto)}`
}


// chamando a funcao a partir de um objeto
const produto = {
        nome: 'Notebook',
        preco: 4599,
        desc: 0.15,
        getPreco /*  vai criar um atributo com nome getPreco e vai associar a funcao q declaramos lá em cima*/
}

// vamos ter como reposta NaN se nao colocamos o preco e desc no global
global.preco = 20
global.desc = 0.1
// chamando a funcao diretamente
console.log(getPreco())

// chamando a funcao a partir de um objeto
console.log(produto.getPreco())

// chamando a partir do call e do apply, o call e o apply recebe como parametro o contexto que ele vai buscar os atributos.
const carro = {preco: 49990, desc: 0.3}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// a diferenca do call e do apply e a passagem dos parametos.

// call
//1º parametro é o contexto
//e os outros parametros são os parametros da funcao
console.log(getPreco.call(carro, 0.17, '$' ))

// apply
//1º parametro é o contexto
// e os parametros da funcao são inseridos dentro de um array
console.log(getPreco.apply(global, [0.17, '$']))