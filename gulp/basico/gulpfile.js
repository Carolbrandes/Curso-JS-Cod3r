const gulp = require('gulp')
const {
    series,
    parallel
} = require('gulp')
    // series -> para uma tarefa ocorrer após a outra. Ex: Primeiro juntamos tdos scrips em um unico arquivo e somente depois minificamos


// cada funcao que criamos abaixo representa uma task

const antes1 = cb => {
    console.log('tarefa antes 1')
    return cb() /* o return vai sinalizar que a funcao foi concluida */
}

const antes2 = cb => {
    console.log('tarefa antes 2')
    return cb()
}


// vamos passar como paramentro uma funcao callback, que será iniciada após a tarefa copiar ser finalizada
// qm vai passar essa funcao callback será o proprio gulp
function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) /** quais arquivos q vc vai usar como entrada para o workflow */
    gulp.src('pastaA/**/*.txt') /**pega qlq arquivo q esteja dentro da pasta A e q tenha extensao .txt  */
        .pipe(gulp.dest('pastaB')) /** o pipe serve para fazer transformacoes no arquivo de entrada, podemos ter varios pipe(), nesse caso estamos solicitando que ele crie a pastaB e coloque os arquivos lá */
    return cb()
}

const fim = cb => {
    console.log('fim')
    return cb()
}

// precisamos exportar para que seja executado
// o gulp espera receber uma task chamada default, é uma das formas é colocando module.exports.default
module.exports.default = series(parallel(antes1, antes2), copiar, fim)