// desafio transforma a classe em funcao construtora:


// a classe vira uma funcao construtora
// class Pessoa{
//         constructor(nome){
//                 this.nome = nome
//         }

//         falar(){
//                 console.log(`Meu nome é ${this.nome}`)
//         }
// }


function Pessoa(nome){
       this.nome = nome

        this.falar = function(){
                console.log(`Meu nome é ${this.nome}`)
        }
}

const p3 = new Pessoa("Maria")
p3.falar()