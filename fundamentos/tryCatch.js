function tratarErro(erro) {
    throw 'mensagem'
}


function imprimirNome(obj) {
        try{
                console.log(obj.nome.toUpperCase() + "!!!")
        }catch (e){
                tratarErro(e)
        } finally{
                console.log('final')
        }
}

const obj = { name: 'Roberto'}

imprimirNome(obj)