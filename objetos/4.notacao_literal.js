const a = 1
const b = 2
const c = 3

// a parir do EMascript 2015, já é automático a atribuição de uma chave a com o valor da const a, evitando duplicidade
const obj = {a, b, c}

// criando objeto com chaves e valores a partir de variaveis ou parametros
const nomeAtributo = 'nota'
const valorAtrr = 7.87

const obj2 = {}
obj2[nomeAtributo] = valorAtrr
console.log(obj2)

const obj3 = {[nomeAtributo]: valorAtrr}

console.log(obj3)

// nova definicao de metodos
// nao precisamos mais fazer funcao: function(){}

const obj5 = {
        funcao2(){

        }
}

