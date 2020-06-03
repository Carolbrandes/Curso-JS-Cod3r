// function declaration
//a vantagem é declarando dessa forma, antes de declarar a funcao, podemos invocá-la antes.
//ex:
//linha 1 - console.log(soma)
//linha 2 - function soma()
// isso é possivel pq primeiro o interpretador do js carrega as funcoes e depois executa o codigo
function soma(x,y) {
        return x+y
}

// function expression
const sub = function (x,y) {
        return x-y
}

//named function expression
//a vantagem é de q no momento de debugar o código, vai aparecer o nome da função porém pouco usada
const mult = function mult(x,y) {
        return x*y
}