//  o reduce transforma os elementos do array em um ou mais novos elementos, o parametro vai ser acumulado em cada chamada. Vamos ter um acumulado. Sempre o primeiro elemento é o acumulador. Porém é possivel tb passar um outro valor para ser o acumulador. 
// ele tem o conceito de agregar os valores em um só

const alunos = [
        {nome: 'João', nota: 7.3, bolsista: false},
        {nome: 'Maria', nota: 9.2, bolsista: true},
        {nome: 'Ana', nota: 8.7, bolsista: true},
        {nome: 'Pedro', nota: 9.8, bolsista: false}
]

// 1º vamos usar o map para termos um novo array apenas com as notas dos alunos
// o reduce nesse caso vai somar todas as notas dos alunos
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
        console.log(acumulador, atual)
        return acumulador+atual
}, 10 /* passamos um acumulador, ai nesse caso na 1ª rodada vai somar 10 + o primeiro elemento*/)

console.log(resultado)

// desafio 1: Todos os alunos são bolistas?

const todosBolsistas = (acumulador, atual) => acumulador && atual

const desafio1 = alunos.map(a => a.bolsista).reduce(todosBolsistas)

console.log(desafio1)

// desafio 2: algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => acumulador || atual
const desafio2 = alunos.map(a=> a.bolsista).reduce(algumBolsista)
console.log(desafio2)

//implementacao do reduce
Array.prototype.reduce2 = function (callback, valorInicial) {
        const indiceInicial = valorInicial ? 0 : 1
        let acumulador = valorInicial || this[0]

        for(let i=indiceInicial; i < this.length; i++){
                acumulador = callback(acumulador, this[i], i, this)
        }

        return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))
console.log(nums.reduce2(soma, 21))
