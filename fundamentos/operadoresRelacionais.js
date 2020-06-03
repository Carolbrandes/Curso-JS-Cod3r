// marco zero
const d1 = new Date(0)
const d2 = new Date(0)

// os dois resultados vao dar falso pq esta sendo comparado endereco de memoria
console.log(d1 == d2)
console.log(d1 === d2)

// ja aqui  vai verdadeiro, pq numeros estao sendo comparados
console.log(d1.getTime() == d2.getTime())
console.log(d1.getTime() === d2.getTime())