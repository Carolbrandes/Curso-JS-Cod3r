const nums = [5.5, 6, 8, 9]

// estamos fazendo com que quando a for igual 2, interrompa o loop externo, no qual colocamos uma 'etiqueta' se nao tivessemos colocado essa etiqueta, ele iria interromper o laço mais interno. 
// nao e recomendado utilizar essa estrutura
externo: for (let a in nums){
        for(let b in nums){
                if(a == 2){
                        break externo
                }
        }
}