// criando o arquivo package.json:
// 1) entre dentro da pasta desejada, onde voce quer que fique o arquivo com cd
// 2) 1ª forma - npm init e vai voce vai responder as perguntas que ele for fazendo e no final  para finalizar pressione enter ou se quiser abortar digite no.
//3) 2ª forma - npm init -y (ele vai responder sim para todas as perguntas e vai criar automaticamente)

// td vez q voce instalar uma dependencia com npm ele vai criar uma pasta node_modules na pasta que voce deu comando. 
// para ter a dependencia no arquivo json utilize o comando: npm i --save nome da dependencia
// o objetivo desse arquivo  descrever o proj e ter a descricao de todas as dependencias que o seu projeto precisa
// npm i --save significa alem de instalar dependecia e ele vai criar uma area para instalar as depedencias
// no nome da dependencia q instalamos no package.json - qd vc tem o ^ ele permite a atualizacao da versao. Permite que o "fix" seja modificado. Ex: "axios": "^0.17.1" ele permite ir para a versao 0.18.1 0 fixo seria o 17
// npm i --save dev axios@0.17.1 -E   - o --save dev q só sera necessaria em desenvolvimento e nao em producao. o -E e para instalar necessariamente nessa versao.
// obs: o package-lock.json  é um arquivo que deve ir para o repositório. Ele é uma forma de garantir que vai ser utilizada a mesma versao que foi utilizada na sua máquina. Ele contem umas hashs de controle para garantir a integridade

// esta no servido remoto da cod3r
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

// o axios que importamos e um client http, ele faz requisicoes para obter  informacoes de algo que esta remoto.
const axios = require('axios')

// o get obtem informacao do servidor
// qd essa requisicao retorna e ele vai chamar um metodo chamado then
// esta acontecendo uma promisse por debaixo dos panos
// desafio obter a mulher chinesa com o menor salario
const getChina = funcionario => funcionario.pais == 'China'
const getMulheres = funcionario => funcionario.genero == 'F'
const getMenorSalario = (funcionarioAtual, funcionarioProximo) => funcionarioAtual.salario <= funcionarioProximo.salario ? funcionarioAtual : funcionarioProximo
axios.get(url)
        .then(response => {
                const funcionarios = response.data
                console.log(funcionarios.filter(getChina).filter(getMulheres).reduce(getMenorSalario))
               
        })


      