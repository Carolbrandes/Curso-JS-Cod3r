// qd importamos um modulo esse modulo é "cachéado", ou seja o node faz cache dos modulos.
// para importar um modulo e  q qd isso ocorrer um novo objeto seja gerado vc pode usar a funcao factory

// esse objeto ele vai ter uma unica instancia, pq o node faz cache dos modulos. Eles sao singleton
module.exports = {
        valor: 1,
        incrementar(){
                this.valor++
        }
}

