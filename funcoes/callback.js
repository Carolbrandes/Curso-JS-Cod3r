// callback - é qd chamamos uma funcao novamente
// passar uma funcao para outra funcao e qd um determinado evento ocorrer essa funcao é chamada de volta. Pode ser chamada varias vezes ou uma unica vez.
// no js é muito utilizado o padrão observer
// aqui o evento foi o loop, para cada elemento ele chama o callback.
// outro exemplo é a chamada ajax, vc vai no servidor e vc passa p requisicao uma funcao qd a resposta chegar, seja de sucesso ou erro.

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
        console.log(`${indice + 1}, ${nome}`)
}

// como passamos a funcao por parametro nao precisamos passar o ()
fabricantes.forEach(imprimir)

// diferenca de usar ou nao funcao callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

// 1 sem callback
let notasBaixas = []

for(let i in notas){
        if(notas[i] < 7){
                notasBaixas.push(notas[i])
        }
}

console.log(notasBaixas)

// 2 com callback
// filter vai filltra elementos emm cima de um determinado criteiro q vai retorna true ou false. Não altera o array original
const notasBaixas2 = notas.filter(function(nota){ return nota < 7})

console.log(notasBaixas2)

// com arrow function 
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

// exemplo de callback no browser
// a funcao e chamada qd clicamos no body
// se der f5 vamos ter q registrar de novo.

document.querySelector('body').onclick = function(e){
        console.log('o evento ocorreu')
}



