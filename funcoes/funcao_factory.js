// funcao factory é uma funcao que retorna um objeto

// aqui voce ja tem uma instancia de um objeto
const produto = {
        nome: 'tv',
        preco: 3000
}

// supondo q voce queira de ter varias instancias de um mesmo produto, voce pode criar uma funcao factory.

// factory simples
// OBS: eu nao preciso colocar nome: nome e preco:preco pq o nome do parametro é igual ao da propriedade
function criarProduto(nome, preco) {
        return {
                nome,
                preco,
                desconto: 40
        }

}

console.log(criarProduto("tv", 3000))


// classe VS funcao factory

// Na classe o this pode variar se executarmos no navegador, o this sera undefined
class Pessoa{
        constructor(nome){
                this.nome = nome
        }

        falar(){
                console.log(`Meu nome é ${this.nome}`)
        }
}

const p1 = new Pessoa("João")
p1.falar()



// aqui nao precisamos usar this e ele tem o contexto lexico.
const Pessoa2 = nome => {
        return {
                falar: () => console.log(`Meu nome é ${nome}`)
        }
}

const p2 = Pessoa2("Mario")
p2.falar()
