//OO - voce tem dados e dentro desses dados voce manipula funcoes.

// objeto = {
//         valor1, 
//         valor2,
//         valor3,
//         processamento(){}
// }

// voce tem atributos e funcoes
// voce passar acessar essas funcoes e prop. atraves desses objetos. Foco passou a ser o objeto
//objeto.processamento()

// principios importantes
//1. abstracao - pegar um objeto do mundo real e trazer para dentro do sistema, simplifcando o objeto.
//2. encapsulamento - detalhes de implementacao escondidos e mostra pra qm vai usar uma interface simples.
// 3. heranca (prototype) - principio do é um. O js não permite heranças multiplas. Tem uma linha q diz que devemos priorizar a composição ao invés da herança.
// 4 .polimorfismo - multiplas formas

// objeto - é uma colecao dinamica de pares chave e valor.

// object é uma funcao
// qd fazemos new Object, um objeto é instanciado, atraves de uma funcao construtora.
const produto = new Object;
//por ser dinamica podemos add atributos
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220

console.log(produto)

// podemos deletar atributos
delete produto.preco
console.log(produto)

const carro = {
        modelo: 'a4',
        valor: 89000,
        proprietario: {
                nome: 'Raul',
                idade: 56,
                endereco: {
                        logradouro: 'Rua Abc',
                        numero: 123
                }
        },

        condutores: [{
                        nome: 'Junior',
                        idade: 19
                },
                {
                        nome: 'Ana',
                        idade: 42
                }
        ],

        calcularValorSeguro: function(){

        }
}

carro.proprietario.endereco.numero = 1000
// dessa forma é boa qd recebemos esses atributos por parametros
//porem se vc ja conhece os atributos a forma de cima é melhor
carro['proprietario'][ 'endereco']['logradouro'] = "Av Gigante"

console.log(carro)

delete carro.condutores

// apesar do atributo condutores ter sido deletado, o comando abaixo nao vai dar erro pq uma vez q carro existe podemos acessar qlq prop ou funcao existente ou nao. Ele vai voltar undefined
console.log(carro.condutores)

// porem se eu tenta acessa o tamanho de condutores q nao existe ai sim vai gerar erro
console.log(carro.condutores.length)