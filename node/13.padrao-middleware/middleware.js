// middleeware pattern ou chain of responsability
// o contexto e um objeto q sera passado de um passo para o outro. Esse objeto carrega os dados
const passo1 = (contexto, next) =>{
        // aqui estamos add um atributo valor1 ao objeto contexto
        contexto.valor1 = 'mid1'
        next()
}

const passo2 = (contexto, next) => {
        contexto.valor2 = 'mid2'
        next()       
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
        const execPassos = indice => {
                // primeira coisa e verificar se esse array esta setado
                // verificar se o indice q esta sendo passado é menor que o tamanho do array
                // se as duas condicções forem verdadeiras, ele vai pegar uma funcao de determinado indice e vai passar como parametro o contexto, e uma funcao callback(que no caso sera ela mesma)
                middlewares && indice < middlewares.length &&
                         middlewares[indice] (contexto, () => execPassos(indice + 1))
        }

        execPassos(0)
}

const obj = {}
exec(obj, passo1, passo2, passo3)
console.log(obj)

// o middleware possui 3 parametros -> request, response e next