// filter - serve para filtrar elementos
// ex: quero alunos que tem notas maiores que 7.
// o resutado do filter e true ou false, o que for true vai para o novo array.

const produtos = [
    {nome: 'Notebook', preco: 7499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}    
]

console.log(produtos.filter(function(p){
        return p.preco > 2500
}))

const filtraPreco = elem => elem.preco >= 500
const filtraFragil = elem => elem.fragil
const novaLista = produtos.filter(filtraPreco).filter(filtraFragil)
console.log(novaLista)

//implementacao do filter
Array.prototype.filter2 = function(calback){
        let subArray = []

        for(let i=0; i < this.length; i++){
                if(calback(this[i], i, this)){
                        subArray.push(produtos[i])
                }
        }

        return subArray;
}

const novalistaFilter2 = produtos.filter2(filtraFragil).filter2(filtraPreco)
console.log(novalistaFilter2)


