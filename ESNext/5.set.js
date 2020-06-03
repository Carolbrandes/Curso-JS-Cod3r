// set -> estrutura de conjunto
// nao e indexada e nao aceita repetição
const times = new Set()
times.add('Vasco').add('Flamengo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete("Vasco")


const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)