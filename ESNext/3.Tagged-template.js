// tagged template - e o processamento de template string atraves de uma funcao
function tag(partes, ...valores){
        console.log(partes)
        console.log(valores)
        return 'outra string'
}

const aluno = "Gui"
const situacao = "Aprovado"
console.log(tag `${aluno} esta ${situacao}.`)


function real(partes, ...valores){
        const resultado = []

        valores.forEach((valor, indice) => {
                valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
                resultado.push(partes[indice], valor)
        })

        return resultado.join(' ')

}

const preco = 29.99
const precoParc = 11
console.log(real `1x de ${preco} ou 3x de ${precoParc}.`)