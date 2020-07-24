//aqui estamos fazendo esses imports para juntar os dois arquivos.js (calculadora.js e testeCalculadora.js) em um só arquivo, passar pelo babel transpilar um codigo mais moderno para codigos onde os browsers que nao suportam ainda novos recursos executarem a aplicação e depois minificar esse arquivo
const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    // ** -> qlq subpasta q esteja dentro de src
    // *.js -> todos arquivos com extensao js
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            /**vai tirar os comentarios */
            presets: ["env"] /**o presets env é a versao mais nova do js */
        }))
        .pipe(uglify()) /**vai pegar o codigo e converter para ser minificado */
        .on('error', err => console.log(err)) /* on -> que pega um evento, nesse caso vamos tratar um evento de erro* */
        .pipe(concat('codigo.min.js')) /**ele vai juntar os arquivos que foram minificados, e ele recebe como parametro o nome do arquivo deve ser gerado */
        .pipe(gulp.dest('build')) /**vai informar o destino que o codigo transformado vai, no caso colocamos q vai para a pasta build*/
    return cb()
}

exports.default = series(padrao)