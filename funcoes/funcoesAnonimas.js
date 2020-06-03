const soma = function (x, y){
        return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
        console.log(operacao(a,b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

// vai dar -1, pq ele usou o 3 e 4
imprimirResultado(3, 4, function(x,y){
        return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

// na nova versao do js pode omitir o function()
const pessoa = {
        falar: function(){
                console.log('opa')
        }
}
