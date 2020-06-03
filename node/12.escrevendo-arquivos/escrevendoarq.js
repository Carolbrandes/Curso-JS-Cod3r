const fs = require('fs')

const produto = {
        nome: 'Celular',
        preco: 1249.99,
        desconto: 8.15
}

// o '/arquivoGerado.json' nao existe no diretorio, nos estamos criando ele.

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
        console.log(err || "Arquivo salvo!")
})