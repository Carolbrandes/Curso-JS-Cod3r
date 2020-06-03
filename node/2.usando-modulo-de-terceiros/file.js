// npm - gerenciador de pacotes do node, e responsavel por baixar bibliotecas de terceiro. Podemos baixar jquery, angular, react

// npm i ... instalar qd ele instalar ele cria a pasta node modules. E ai dentro ele instala as dependencias. Isnatlamos o lodash

// qd colocamos nosso proj no github, nao e interessante que essa pasta node module va tb. Para nao ir para o git, criamos o arquivo .gitignore

// usando o lodash
// aqui nao e passado caminho relativo, ele vai procurar dentro de node modules o arquivo index.js
// o _ é usado p referenciar uma biblioteca
const _ = require('lodash')
setInterval(()=> console.log(_.random(1, 1000)), 2000)