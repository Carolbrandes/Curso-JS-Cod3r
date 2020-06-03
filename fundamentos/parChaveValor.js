// temos o conceito de chave a valor quando definimos uma variavel ou constante. No ex abaixo temos como chave saudacao e valor opa
// contexto lexico - local  fisico que a variavel foi definida
// no ex foi definido no arquivo
const saudacao = "opa" // contexto lexico 1

function exec() {
        const saudacao = "Fala" 
        return saudacao
} // contexto lexico 2, essa saudacao vai buscar no contexto mais restrito q e da funcao

// obj sao grupos aninhados de pares chave/valor
// declaracao literal do obj cliente
const cliente = {
        nome: 'Pedro',
        idade: 32,
        peso: 90,
        endereco: {
                logradouro: 'Rua muito legal',
                numero: 123
        }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)