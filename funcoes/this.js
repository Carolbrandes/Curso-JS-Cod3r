// em funcoes tradicionais o this pode variar de acordo com quem chamou a funcao.
//ja a funcao arrow o this nao varia nunca, e ele e definido no momento em a funcao e definida.  O this e associado ao contexto lexico = onde a funcao é escrita.

const pessoa = {
        saudacao: 'Bom dia!',

        falar(){
                console.log(this.saudacao)
        }
}

// aqui deu certo
pessoa.falar()

// ocorre um conflito pq nao esta mais no contexto de pessoa
const falar = pessoa.falar;
falar()

// agora com bind estamos dizendo que o this se refere a pessoa.
const falar2 = pessoa.falar.bind(pessoa)
falar2()

function pessoa2() {
        this.idade = 0
// o setInterval passa uma funcao para ser executada apos um tempo definido em milesegundos. No caso do exemplo abaixo ela será executada a cada 1 seg.
// o this no setInterval vai se referir ao temporizador do setInterval, pois é ele qm esta chamando a funcao.
// para resolver podemos colocar o bind, colocamos .bind(this) pq estamos dentro da funcao pessoa.
// outra maneira é armazenar o this em um const e substituir o this dentro do setInterval pelo nome da const declarada.
        setInterval(function(){
                this.idade++
                console.log(this.idade)
        }.bind(this), 1000)
}

new pessoa