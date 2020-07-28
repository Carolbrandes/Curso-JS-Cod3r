const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    // pelo tsProject ele sabe quais serão os arquivos que serão convertidos para js, pq o tsProject está ligado com o arquivo tsconfig.json
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)