// em node a aplicacao backend e organizada em pasta e arquivos
// um arquivo representa um modulo
// td q vc escreve dentro do modulo, so fica disponivel dentro do modulo. Para vc ter esse conteudo em outro modulo, vc tem q exportar.
// padroes de modulo: commonjs (padrao usado no node) e do emascript 2015 (import e export)
// com a palavra this, a frase que escrevemos pode ser acessada em outro arquivo.
// o this, exports e module.exports sao a mesma coisa, soa objetos, q sao uma colecao de chave e valor dinamica. 
this.ola = "fala pessoal"

// outras formas de exportar:
exports.bemVindo = "Bem vindo ao node"

module.exports.ateLogo = "Ate a proxima"


