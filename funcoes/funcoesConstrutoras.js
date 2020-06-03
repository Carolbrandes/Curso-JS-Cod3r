function Carro(velMax=200, delta = 5){
        //atributo privado, só pertence a funcao carro.
        let velocidadeAtual = 0

        //metodo publico
        this.acelerar = function(){
                if(velocidadeAtual + delta <= velMax){
                       velocidadeAtual+=delta
                }else{
                        velocidadeAtual = velMax
                }
        }

        //metodo publico
        this.getVelocidadeAtual = function(){
                return velocidadeAtual
        }
}

// duas instancias de uma funcao construtora
// Obs: Em JS classe é uma outra forma de se escrever uma função. 
// Em js herança é baseada em prototype
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


// Carro é uma função
console.log(typeof Carro)

// ferrari é um objeto
console.log(typeof ferrari)