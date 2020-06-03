// no arquivo package.json podemos criar scripts
// com o arquivo package.json podemos recriar a pasta node modules a partir do que esta definido dentro do arquivo package.json
// para recriar a pasta node_modules, por ex, vamos na pasta 5 onde temos o arquivo funcionario, nesse arquivo vamos dar o comando npm i que ele vai recriar a pasta node_modules
// dando npm start estamos rodando um script inserido dentro do package.json
// o star e o teste e um script padrao do node, porem o dev nao e um script padrao. Entao para executar o comando dev, devemos fazer: npm run dev


const saudacao = require('../9.parametros_entre_modulos/file')('Ana', 'Lucas', 'João')
console.log(saudacao)