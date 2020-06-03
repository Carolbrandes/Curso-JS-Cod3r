// fs -> file system para ler arquivos
const fs = require('fs')
const caminho  = __dirname + '/arq.json'


//ler de forma sincrona - aqui ele espera o dados serem carregados para ai entao ter o console.log
// utf-8 e enconding q o arquivo foi escrito
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// ler de forma assincrona
// aqui nos passamos o caminho do arquivo, enconding e uma funcao callback. Qd os dados forem lidos vai acontecer essa funcao. Ou seja a funcao só sera chamada qd receber os dados.
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
        // o conteudo vem no formato de string, por isso precisamos fazer o parse para tranformar em objeto
        const config = JSON.parse(conteudo)
        // a linha abaixo so vai funcionar se o config for um objeto
        console.log(`${config.db.host}: ${config.db.port}`)
})


// OBS: COMO TRATA-SE DE UM  ARQUIVO JSON NAO E NECESSARIO USAR O READfILE OU READFILESYNC. PODE SER FEITO DESSA FORMA: 
const config = require("./arq.json")  /*aqui ele ja retorna como um objeto instanciado, aqui ocorre de forma assincrona. O console.log ocorre primeiro do que o o console.log acima onde chamamos o readFile, não é necessario fazer parse */
console.log(config.db.host)

// lendo pastas
// __dirname é a pasta atual
fs.readdir("node", (err, arquivos) => {
        console.log('Conteudo da pasta:')
        console.log(arquivos)
})


//o node só contem uma thread.E essa unica thread lida com todas as requisições.Se a requisição for assincrona ela pode passar essa requisição a uma worker thread e continuar o processo de monitorar as requisições(ja que como é assincrona a thread principal não precisa esperar a resposta para tratar outra).Ja quando a requisição é sincrona a thread do node passa essa requisição a uma worker thread,mas nesse caso ela precisa esperar uma resposta da sub-thread para continuar o processo.Assim, não é bom ler arquivos grandes de forma sincrona pois eles travam o sistema,ja que a thread do node tem que parar tudo e esperar uma resposta,o que pode demorar um pouco ja que o arquivo é grande.
