// contexto lexico - contexto em que as "coisas" foram declaradas

const valor = 'Global'


// o contexto dessa funcao é esse module do node
// se executarmos vai imprimir global, ja q dentro dessa funcao nao tem outra variavel com mesmo nome
// ela primeiro procura no escopo local dentro dela mesmo se ela nao achar ela vai para o escopo externo mais proximo do local q ela foi definida. 
function minhaFuncao() {
        console.log(valor)
}


function exec() {
        const valor = 'local'
        minhaFuncao()
}

// como a minhaFuncao() dentro de exec() foi declarada no contexto global, ele vai procurar no contexto global, já q dentro dela não foi declara a const valor. Então o q vale é verificar a variavel que foi declarada mais proxima do local onde a funcao foi declarada.
exec()

