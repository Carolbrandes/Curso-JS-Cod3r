// e uma estrutura de chave e valor, sendo que a chave pode ser uma funcao, numero, objeto
// nao podemos ter chaves duplicadas, entao se repetir, o ultimo é o valido
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map(
        [
                [function () {}, 'funcao'],
                [{}, 'objeto'],
                [123, 'numero']
        ]
)

chavesVariadas.forEach((v, ch) => {
        console.log(ch, v)
})

// o has verifica se determinada chaves existe dentro de chavesVariadas
console.log(chavesVariadas.has(123))

// usamos o delete para deletar determinada chave
chavesVariadas.delete(123)

// usamos o atributo size para verificar qts elementos existem dentro do map
console.log(chavesVariadas.size)
