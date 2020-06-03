// pessoa aponta para um endereco de memoria, e apenas la nesse endereco tem o objeto. Porém a variavel apenas armazena esse endereco

const pessoa = {nome: 'João'}

// qd fazemos isso não estamos alterando a constante pq ela continua apontando para o mesmo endereço de memoria.
pessoa.nome = 'Pedro'

// o q nao pode ser é feito é atribuir a essa const um outro objeto, ou seja, um outro endereco de memoria
//pessoa = {nome: 'Ana'}


// congelando o objeto pessoa
// não é possivel mexer mais no objeto
Object.freeze(pessoa)
// ele ignora e continua com o nome Pedro
pessoa.nome = "Maria"

// tb nao podemos mais add atributos
pessoa.endereco = "Rua abc"

// tb nao é possivel deletar
console.log(pessoa.nome)

// ja criamos o objeto para ser constante
const pessoa2 = Object.freeze({nome: 'Joao'})
