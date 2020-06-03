// declarando uma variavel var ela fica visivel mesmo fora do escopo do bloco que ela foi criada (exceto se declarada entro de uma funcao)
{{{{var sera = 'será??'}}}}

console.log(sera)

function teste() {
     var local = 123   
}

teste()
// nao conseguimos acessar a var local pq ela foi definida dentro da funcao, entao so podemos acessar dentro da funcao
//console.log(local)


// quando definimos uma variavel fora de um funcao ela é global, e pode ser acessada a partir do window. Todas as variaveis vao parar dentro de window
// tudo no site esta dentro de window

var numero = 1 

{
        var numero = 2
        console.log('dentro: ' , numero)
}

console.log('fora: ' , numero)

// usando o var em loop

for(var i = 0; i<10; i++){
        console.log(i)
}

console.log('i = ', i)

// ex 2

const funcs = []

for (var i = 0;  i < 10; i++){
       funcs.push(function () {
               console.log(i)
       })
}

// como var no for tem escopo global, e formos imprimir no indice 2 e 8, ele nao vai respeitar o valor que i tenha no momento do loop e fora do escopo do for funcs com qualquer indice vai ser 10 pq e o valor atual de i, q foi qd ele parou de entrar no loop
funcs[2]()
funcs[8]()