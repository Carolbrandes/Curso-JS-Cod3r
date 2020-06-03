// for in - itera em cima dos indices
// for of - itera em cima dos valores

// itera sob string
for(let letra of "Cod3r"){
        console.log(letra)
}

// itera sob array
const assuntosEcma = ['Map', 'Set', 'Promise']
// iterando com for in pelo indice
for(let i in assuntosEcma){
        console.log(i)
}

//iterando com for of 
for(let assunto of assuntosEcma){
        console.log(assunto)
}


// itera sob map
const assuntosMap = new Map([
        ['Map', {abordado: true}],
        ['Set', {abordado: true}],
        ['Promise', {abordado: false}]
])

console.log("chave e valor:")
for(let assunto of assuntosMap){
        console.log(assunto)
}

console.log("chave:")
for(let chave of assuntosMap.keys()){
        console.log(chave)
}


console.log("valor:")
for(let valor of assuntosMap.values()){
        console.log(valor)
}


console.log("chave e valor (separados com destructuring):")
for(let [ch, vl] of assuntosMap.entries()){
        console.log(ch, vl)
}


console.log("percorrendo set:")
const s = new Set(['a', 'b', 'c'])
for(let letra of s){
        console.log(letra)
}



