function seForVerdade(valor) {
        if (valor) {
                console.log('É verdade: ' + valor)
        } else {
                console.log('nao é verdade')
        }
}

// retorna falso
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('') /* se a string tiver espaco vazio vai retorna verdadeiro*/
seForVerdade(0)

// retorna verdadeiro
seForVerdade({})
seForVerdade([])

// setenca de codigo vazio
if (num > 7);

Number.prototype.entre = function (inicio, fim) {
        return this >= inicio && this <= fim
}

const imprimirResul = function (nota) {
        if (nota.entre(9, 10)) {
                console.log('Quadro de honra!')
        } else if (nota.entre(7, 8.99)) {
                console.log('aprovado')
        } else if (nota.entre(4, 6.99)) {
console.log('recuperacao')
        }else if(nota.entre(0, 3.99)){
                console.log('reprovado')
        }else{
                console.log('nota inválida')
        }
}