// usamos promise qd queremos ter um processamento assincrono
// pode ser atendida ou ser rejeitada dependendo da situação

function falarDepoisDe(segundos, frase) {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(frase)
                }, segundos * 1000)
        })
  }

falarDepoisDe(3, 'Que legal')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e))
