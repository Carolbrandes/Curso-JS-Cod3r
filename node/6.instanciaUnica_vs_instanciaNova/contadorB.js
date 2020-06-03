// como o node retorna um cache, ou seja vai ter uma unica instancia, vamos uma funcao factory que vai retornar um novo objeto:

module.exports = () => {
        return {
                valor: 1,
                inc(){
                        this.valor++
                }
        }
}