const sequencia = {
        // é uma convencao q diz que a variavel é privada
        _valor: 1,

        get valor() {
                return this._valor++
        },

        set valor(valor) {
                if (valor > this._valor) {
                        this._valor = valor
                }
        }
}

console.log(sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)


// Obs: Js nao aceita sobrecarga de metodos