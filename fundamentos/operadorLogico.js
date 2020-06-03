// tabela verdade do Ou exclusivo:
// o resultado so sera verdadeiro se cada operando tiver um resultado diferente
// v  xor  v => false
// v xor f => true
// f xor f => false
// f xor v => true

function compras(trabalho1, trabalho2) {

        // os operadores || e && sao curto circuito que dependendo do contexto, se a primeira declaracao for v ou f ele nem analisa as outras operacoes

        const comprarSorvete = trabalho1 || trabalho2

        const comprarTv50 = trabalho1 && trabalho2

        // operador bitwise para fazer o xor (ou exclusivo)
        //const comprarTv32 =  !!(trabalho1 ^trabalho2)
        // outra alternativa e verifica se um e diferente do outro
        const comprarTv32 =  trabalho1 != trabalho2
        const manterSaudavel = !comprarSorvete // operador unario

        // estamos retornando um objeto omitindo o nome das chaves, e qd fazemos isso, as chaves serão chamadas pelo nomes das constants ou variaveis. Isso e um recurso do ES2015
        return {
                comprarSorvete, comprarTv50, comprarTv32, manterSaudavel
        }
 
}

console.log(compras(true, true))

let num1 = 1
let num2 = 2

num1++
console.log(num1)

// a forma pre-fixada tem preferencia na ordem de execucao
--num1
console.log(num1)

// o ++num1 foi executado antes da comparacao
// o num2 so sera decrementado apos a comparacao
console.log(++num1 === num2--)

