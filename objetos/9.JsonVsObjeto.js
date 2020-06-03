// json - formato textual de dados
// faz a interorabilidade entre sistemas, ele é generico, nao carrega nada especifico de um sistema
// ele serve para fazer a comunicação entre sistemas totalmente diferentes.


// transformar objeto para json:
// a funcao nao sera incluida, pq no json só entra dados
const obj = {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))


// transforma json para objeto
// nota: os atributos tem que estar entre aspas duplas, não pode aspas simples.
// o json suportam varios formatos diferentes
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d":{}, "e":[] }'))

