const pessoa = {
        nome: 'Rebeca',
        idade: 2,
        peso: 13
}

// Object.keys - pega as chaves do objeto
console.log(Object.keys(pessoa))

// Object.values - pega os valores do obj
console.log(Object.values(pessoa))

// Object.entries - retorna um array que vai conter as chaves e valores do obj
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
});

// podemos fazer um destructuring
Object.entries(pessoa).forEach(([chave, valor])=> {
        console.log(`${chave}: ${valor}`)
});

// podemos definir caracteristicas da propriedade que da maneira dinamica nao conseguimos
// 1º param - objeto 
// 2º param - nome da propriedade que voce quer criar

Object.defineProperty(pessoa, 'dataNascimento', {
        enumerable: true, /* pode ser listada no object.keys*/
        writable: false, /* se poder se modificar*/
        value: '01/01/2019'
})

// vai ignorar e vai manter a data inicial
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)


//Object.assign()
const dest = {a:1}
const o1 = {b:2}
const o2 = {c: 3, a:4}
// dest - vai receber os atributos o1 e o2 
// como o atrbuto a ja existia em dest, ele sera sobrescrito e vai ter o valor de 4
const obj = Object.assign(dest, o1, o2)
console.log(obj)
