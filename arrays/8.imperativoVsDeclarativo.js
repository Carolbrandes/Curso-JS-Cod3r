const alunos = [
     {nome: 'João', nota: 7.9},
     {nome: 'Maria', nota: 9.2}   
]

// imperativo
// aqui ele faz tudo ao mesmo tempo
//menos reuso
// o foco é como tem q ser feito, detalhes do passo é mais importante do que deve ser feito
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota    
}

console.log(total1/alunos.length)

// declarativa
// aqui podemos reusar as funcoes getNota e soma em outros contextos
// o foco é o que deve ser feito e nao como é feito. 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

