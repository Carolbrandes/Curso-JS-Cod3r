const gulp = require('gulp')
    // series -> para uma tarefa ocorrer após a outra. Ex: Primeiro juntamos tdos scrips em um unico arquivo e somente depois minificamos
const series = gulp.series

// cada funcao que criamos abaixo representa uma task

const antes1 = cb => {
    console.log('tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2')
    return cb()
}


// vamos passar como paramentro uma funcao callback, que será iniciada após a tarefa copiar ser finalizada
// qm vai passar essa funcao callback será o proprio gulp
function copiar(cb) {
    console.log('tarefa de copiar')
    return cb()
}

const fim = cb => {
    console.log('fim')
    return cb()
}

// precisamos exportar para que seja executado
// o gulp espera receber uma task chamada default, é uma das formas é colocando module.exports.default
module.exports.default = series(antes1, antes2, copiar, fim)