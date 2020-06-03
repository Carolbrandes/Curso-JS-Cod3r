// spread - "espalha"
// rest - "junta"

// 1) usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12375.99}

// aqui estamos espalhando todos os atributos de funcionariop dentro da const clone
// nao vai gerar nenhum impacto no objeto funcionario
const clone = {ativo: true, ...funcionario}


// 2) usar o spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['Maria', ...grupoA]