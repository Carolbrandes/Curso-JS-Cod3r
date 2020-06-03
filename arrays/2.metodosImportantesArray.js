const pilotos = ['Vettel', 'Alonso', 'Raikkonnen', 'Massa']
pilotos.pop() // vai excluir o ultimo elemento
pilotos.push('Verstappen') // add na ultima posicao do array
pilotos.shift() // vai excluir o primeiro elemento
pilotos.unshift('Hamilton') // add um elemento na primeira posição do array
pilotos.splice(2, 0, 'Bottas', 'Massa') // add novos elementos 
pilotos.splice(3, 1) // remove o elemento de indice 3
const pilotos2 = pilotos.slice(2) // retorna um novo array, nesse caso ele vai gerar um novo array a partir do indice 2. O slice serve para pegar uma parte do array. 
const pilotos3 = pilotos.slice(1, 4) // ele vai pegar a partir do indice 1 e vai ate o indice 3. O 2º parametro nao entra no novo array. 

