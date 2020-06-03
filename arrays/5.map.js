// o map serve para fazer uma transformação no array, ele mapeia o array para um novo array do mesmo tamanho, só que com os dados modificados.
// o map é um for com proposito, ele recebe como parametro uma funcao callback, e essa funcao pode ter 3 parametros (1º- o valor, 2º o indice e o 3º o proprio array)
// o map nao transforma o array atual.
const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function(e){
        return e*2
})

console.log(resultado, nums)

// ex 2:
const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// o resultado nums.map(soma10) é um array, por isso temos acesso novamente ao map

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// desafio
const carrinho = [
        '{"nome": "Borracha", "preco": 3.45}',
        '{"nome": "Carderno", "preco": 13.90}',
        '{"nome": "Kit de lápis", "preco": 41.22}',
        '{"nome": "Caneta", "preco": 7.50}',
]

// retorna um array apenas com os precos

const JsonParaObjeto = elemento => JSON.parse(elemento)
const PegaPreco = elemento => elemento.preco

lista_precos = carrinho.map(JsonParaObjeto).map(PegaPreco)
console.log(lista_precos)


// implementacao do map:
Array.prototype.map2 = function (callback) { 
        const newArray = []

        for(let i = 0; i < this.length; i++){
                newArray.push(callback(this[i], i, this))
        }

        return newArray
 }

 let resultado2 = carrinho.map2(JsonParaObjeto).map2(PegaPreco)
 console.log(resultado2)






