// closure é o escopo criado qd uma funcao é declarada (tem haver com contexto lexico).
// esse escopo permite a funcao acessar e manipular variaveis externas a funcao

// essa constante só é visivel nesse modulo do node.
// a funcao js é um closure pq ela guarda a memoria do local em que ela foi definida.
const x = "global"

function fora() {
        const x = 'local'

        function dentro(){
             return x   
        }
        return dentro
}

// o retorno da funcao é uma funcao q foi armazenado na const
const minhaFuncao = fora()

console.log(minhaFuncao())