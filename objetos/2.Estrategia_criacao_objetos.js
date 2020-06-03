// usando a notacao literal
const obj1 = {}
console.log(obj1)

// a partir do Object em Js
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// funcoes construrtoras
function Produto(nome, preco, desc) {
        this.nome = nome,
        this.getPrecoComDesconto = () => preco * (1-desc)
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Niveis:
// node: global, modulo e funcao
// browser: bloco (com let e const), window(global) e funcao.
// Obs: acessar new Object é a mesma coisa que funcao construtura. So q a construtora é personalizada

// funcao factory - funcao q fabrica objeto
// podemos usar a forma literal ou construtora

function criarFuncionario(nome, salarioBase, faltas) {
        // objeto literal
      return{
                nome,
                salarioBase,
                faltas,
                getSalario(){
                        return (salarioBase/30) * (30-faltas)
                }
      }  
}

const f1 = criarFuncionario('João', 7900, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario())
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// transformando Json para objeto
// Json é um texto
const fromJson = JSON.parse('{"info": "Sou um json"}')
console.log(fromJson.info)
