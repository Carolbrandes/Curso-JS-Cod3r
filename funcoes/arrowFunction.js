// funcao tradicional
let dobro = function (a){
        return 2 * a
}

// arrow
dobro = a => 2*a
console.log(dobro(Math.PI))

// funcao arrow é sempre anonima
// se tivermos um unico parametro nao precisamos colocar parentesis.
// se tivermos uma unica instrucao podemos omitir as chaves e o return

ola = () => 'olá'
ola2 = _=> 'ola 2' // possui um parametro, mas qd invocar é só não passar.
console.log(ola())

function Pessoa(){
        this.idade = 0

        // setInterval (() => {
        //         this.idade++
        //         console.log(this.idade)
        // }, 1000)
}

new Pessoa

//  como estamos no contexto do node, vamos ter true, o this é o objeto global.
// escopo global
let comparaComThis = function (param){
        console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

// agora o this se refere ao obj
comparaComThis(global)

// com a funcao arrow o this não vai se referenciar a global, mas sim ao módulo q ele foi escrito.

// nao adianta usar o bind na arrow function

let comparaComThisArrow = param => console.log(this === param)

// false
comparaComThisArrow(global)

// true
comparaComThisArrow(module.exports)



