// arguments é um array interno de uma funcao
// mesmo que uma funcao nao tenha parametros declarados na sua assinatura, podemos passar parametros e recupera-los atraves da propriedade arguments.
function soma (){
        let soma = 0;

        for(let i in arguments){
                soma += arguments[i]
        }
        return soma
}

// o valor sera zero
console.log(soma())

console.log(soma(1))

// vai somar tds
console.log(soma(1.1, 2.2, 3.3))