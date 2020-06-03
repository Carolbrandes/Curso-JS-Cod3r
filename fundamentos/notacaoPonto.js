// console e um objeto
console.log(typeof console)

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome) {
        // o nome que sera passado ficara visivel para qm acessar o Obj
        this.nome = nome

        // criando uma funcao publica
        this.exec = function () {
               console.log('Executando...') 
        }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()