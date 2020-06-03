const escola = "cod3r"

// vai retornar o caracter com indice 4
// caso coloquemos um indice que não tenha letra, ele vai retorna vazio
console.log(escola.charAt(4))

// o charCodeAt pega o valor na tabela unicode
console.log(escola.charCodeAt(3))

// o indexOf retorna o indice no caso do numero 3.
console.log(escola.indexOf('3'))

// substring para pegar parte de uma string. No ex abaixo ele vai pegar do indice 1 ate o indice 3 sem incluir o indice 3.
console.log(escola.substring(1, 3))

// vai do indice 1 ate o final
console.log(escola.substring(1))

// podemos usar uma declaração literal para usar o concat
console.log('Escola ' . concat(escola).concat("!"))

// vai trocar onde tem o numero 3 pela letra e
console.log(escola.replace(3, 'e'))

// outra forma é usando expressoes regulares, no ex abaixo ele pega todos os digitos (numeros) e substitui pela letra e:
console.log(escola.replace(/\d/, 'e'))

// substitui todas as letras e digitos pela letra e
// p g e de global
console.log(escola.replace(/\w/g, 'e'))

// converte uma string a partir de um separador em um array. No ex abaixo ele cria um array, usando a virgula como separador, entao cada elem antes da virgula é um item do array. Podemos aplicar regex tb nessa funcao.
console.log('Ana, Maria, Pedro'.split(','))

// template string usando aspas
// vantagem: fica mais organizado, podemos quebrar linha, considera espaco em branco..
const nome = 'Rebeca'
const templateString = `
Olá
${nome} !`

console.log(templateString)

// podemos colocar expressoes dentro do $ que ele vai interpretar
console.log(`1+1 = ${1+1}`)

// podemos chamar uma funcao
// pegamos a funcao arrow que pega um texto e coloca letra maiusculas na const up
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)



