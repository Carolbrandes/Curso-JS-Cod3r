// O Object é uma funcao
console.log(typeof Object)

// A classe é uma funcao
// e uma sintaxe diferente para construir uma funcao
class Produto{}

console.log(typeof Produto)

// funcao é uma acao, executa um processo baseado na setenca de codigo, ela define um bloco. Trecho de codigo que podemos reutilizar ele. 

// ex1 - funcao sem retorno:
function imprimirSoma(a, b) {
        console.log(a+b)
}

imprimirSoma(2,3)
// o valor de b sera undefined uma vez que so foi passado o valor de a, e o resultado sera NaN
imprimirSoma(2)

// ele vai pegar os dois primeiros argumentos vai fazer a operacao e ignorar o restante
imprimirSoma(2, 10, 3, 5, 8)

// vai retorna NaN
imprimirSoma()

// funcao com retorno
// o valor padrao de b é zero
function soma(a, b = 0) {
        return a + b
}

console.log(soma(2,3))

// podemos armazenar uma funcao em uma variavel ou constante
// a const imprimir_soma esta recebendo uma funcao anonima
const imprimir_soma = function (a, b) {
        console.log(a+b)
}

imprimir_soma(5,3)

// armazenando uma funcao arrow
const somaArrow = (a, b) =>  a + b

console.log(somaArrow(4,7))

// se a funcao arrow tiver um unico argumento, nao precisamos coloca-lo entre ()
const imprimir2 = a => console.log(a)