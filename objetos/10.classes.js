// surgio na versao Ecmascript 2015

// essa classe e transformada em uma funcao construtora
class Lancamento{
        constructor(nome = 'generico', valor = 0){
                this.nome = nome
                this.valor = valor
        }
}

class CicloFinanceiro{
        constructor(mes, ano){
                this.mes = mes
                this.ano = ano
                this.lancamentos = []
        }

        addLancamentos(...lancamentos){
                lancamentos.forEach(l => this.lancamentos.push(l))
        }

        sumario(){
                let valorConsolidado = 0
                this.lancamentos.forEach(l => {
                        valorConsolidado += l.valor
                })

                return valorConsolidado
        }
}


const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())

// exemplo 2
class Avo{
        constructor(sobrenome){
                this.sobrenome = sobrenome
        }
}

// aqui com extends definimos uma relacao de prototipo
class Pai extends Avo{
        constructor(sobrenome, profissao = 'professor'){
               // o super esta chamando o construtor da classe avo
                super(sobrenome)
                this.profissao = profissao

        }
}

class Filho  extends Pai{
        constructor(){
                super('Silva')
        }
}

const filho = new Filho
console.log(filho)