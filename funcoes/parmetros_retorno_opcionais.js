function area(largura, altura) {
        const area = largura * altura

        if(area > 20){
                console.log('valor acima do permitido')
                // aqui vai retorna undefined
        }else{
                return area
        }
}

console.log(area(2, 2))

// vai dar NaN
console.log(area(2))

// vai dar NaN
console.log(area())

console.log(area(5,5))