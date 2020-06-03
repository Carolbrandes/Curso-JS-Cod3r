// assim como no navegador vc tem como objeto global o window, no node voce tem o objeto global, que é chamado de global. 
//console.log(global)
//sempre que voce mexe em um objeto compartilhado no global a chance de vc ter  problema é maior, e ai o sistema de modulos do node vem justamente para resolver isso. Porem em uma excessao talvez seja necessario querer colocar um objeto como global e para fazer isso:
// qd fizermos isso em qlq lugar do meu sistema vou ter acesso a minhaApp
global.minhaApp = {
        saudacao(){
                return 'Estou em todos os lugares!'
        },
        nome: "sistema legal"
}